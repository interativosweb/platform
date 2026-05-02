/* ============================================================
   AlquiLab — Helper compartilhado de autenticação / modo convidado
   ------------------------------------------------------------
   Provê:
   - signInAnonymously() automático para visitantes (sem conta)
   - AlquiLabAuth.isGuest()  → true se o usuário atual é anônimo
   - AlquiLabAuth.requireLogin(motivo) → mostra popup pedindo login
   - AlquiLabAuth.showTestModeBanner(opts) → banner amarelo no topo
   ============================================================ */
import { signInAnonymously } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

(function injectStyles() {
    if (document.getElementById('alquilab-auth-styles')) return;
    const css = `
    .al-locked-overlay {
        position: fixed; inset: 0;
        background: rgba(20, 26, 50, 0.5);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        display: flex; align-items: center; justify-content: center;
        z-index: 99999; padding: 20px;
        animation: alFadeIn 0.25s ease;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    .al-locked-box {
        background: #fff;
        border-radius: 22px;
        padding: 32px 30px;
        max-width: 420px;
        width: 100%;
        text-align: center;
        box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
        animation: alPopIn 0.32s cubic-bezier(.16,1,.3,1);
    }
    .al-locked-icon {
        width: 56px; height: 56px;
        border-radius: 18px;
        background: #0067FF;
        color: #fff;
        display: flex; align-items: center; justify-content: center;
        margin: 0 auto 16px;
        box-shadow: 0 12px 28px rgba(0, 103, 255, 0.45);
    }
    .al-locked-icon svg { width: 26px; height: 26px; }
    .al-locked-box h3 {
        font-size: 1.18rem; font-weight: 700;
        color: #00010D; margin-bottom: 8px;
    }
    .al-locked-box p {
        color: #8b91a8; font-size: 0.92rem;
        margin-bottom: 22px; line-height: 1.5;
    }
    .al-locked-actions {
        display: flex; gap: 10px;
        justify-content: center; flex-wrap: wrap;
    }
    .al-btn {
        background: #00010D; color: #fff; border: none;
        padding: 12px 24px; border-radius: 50px;
        font-family: inherit; font-weight: 700; font-size: 0.9rem;
        cursor: pointer; text-decoration: none;
        display: inline-block;
        transition: transform .12s ease, background .2s ease;
    }
    .al-btn:hover { transform: translateY(-1px); background: #2a3260; }
    .al-btn.al-secondary { background: #F2F2F2; color: #00010D; }
    .al-btn.al-secondary:hover { background: #E6E6E6; }

    .al-test-banner {
        position: sticky; top: 0; z-index: 9999;
        background: linear-gradient(90deg, #FFB800, #FF6B00);
        color: #fff;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        font-size: .82rem; font-weight: 700;
        padding: 10px 18px;
        text-align: center;
        display: flex; align-items: center; justify-content: center;
        gap: 14px; flex-wrap: wrap;
        box-shadow: 0 4px 14px rgba(255, 107, 0, .25);
    }
    .al-test-banner a {
        color: #fff; text-decoration: underline; font-weight: 800;
    }
    .al-test-banner .al-banner-btn {
        background: rgba(255,255,255,.18);
        color: #fff; border: 1px solid rgba(255,255,255,.35);
        padding: 5px 14px; border-radius: 50px;
        font-family: inherit; font-weight: 700; font-size: .76rem;
        cursor: pointer; text-decoration: none;
        transition: background .15s;
    }
    .al-test-banner .al-banner-btn:hover { background: rgba(255,255,255,.32); }

    @keyframes alFadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes alPopIn {
        from { opacity: 0; transform: scale(0.92); }
        to { opacity: 1; transform: scale(1); }
    }
    `;
    const style = document.createElement('style');
    style.id = 'alquilab-auth-styles';
    style.textContent = css;
    document.head.appendChild(style);
})();

const LOCK_ICON_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>';

function buildLoginUrl(loginPath) {
    const next = encodeURIComponent(window.location.pathname + window.location.search);
    return loginPath + '?next=' + next;
}

const AlquiLabAuth = {
    _auth: null,
    _loginPath: '../login.html',

    /**
     * Initialize the helper. Call once after creating Firebase auth.
     * @param {Auth} authInstance - Firebase Auth instance
     * @param {Object} opts - { loginPath: '../login.html' }
     */
    init(authInstance, opts = {}) {
        this._auth = authInstance;
        if (opts.loginPath) this._loginPath = opts.loginPath;
    },

    /**
     * Returns true if the current user is missing or anonymous (= guest mode).
     */
    isGuest() {
        const u = this._auth && this._auth.currentUser;
        return !u || u.isAnonymous === true;
    },

    /**
     * Sign in anonymously so existing tool code that depends on currentUser.uid keeps working.
     * Returns the user credential.
     */
    async ensureAnonymous() {
        if (!this._auth) throw new Error('AlquiLabAuth.init() não foi chamado.');
        if (this._auth.currentUser) return this._auth.currentUser;
        try {
            const cred = await signInAnonymously(this._auth);
            return cred.user;
        } catch (e) {
            console.warn('Não foi possível entrar anonimamente:', e);
            return null;
        }
    },

    /**
     * Show a blocking popup that explains the action requires login.
     * @param {string} motivo - Texto curto explicando o que é restrito.
     */
    requireLogin(motivo) {
        const existing = document.getElementById('alLockedOverlay');
        if (existing) existing.remove();

        const overlay = document.createElement('div');
        overlay.id = 'alLockedOverlay';
        overlay.className = 'al-locked-overlay';
        overlay.innerHTML = `
            <div class="al-locked-box" role="dialog" aria-modal="true">
                <div class="al-locked-icon">${LOCK_ICON_SVG}</div>
                <h3>Recurso para usuários cadastrados</h3>
                <p>${motivo || 'Crie sua conta gratuita ou faça login para ter acesso completo e ilimitado a todas as ferramentas da plataforma.'}</p>
                <div class="al-locked-actions">
                    <a class="al-btn" href="${buildLoginUrl(this._loginPath)}">Criar conta / Entrar</a>
                    <button type="button" class="al-btn al-secondary" id="alLockedClose">Fechar</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        const close = () => overlay.remove();
        overlay.querySelector('#alLockedClose').addEventListener('click', close);
        overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
        document.addEventListener('keydown', function onEsc(e) {
            if (e.key === 'Escape') {
                close();
                document.removeEventListener('keydown', onEsc);
            }
        });
    },

    /**
     * Show a sticky banner at the top informing the user is in test/guest mode.
     * Idempotent: if already shown, does nothing.
     */
    showTestModeBanner(opts = {}) {
        if (document.getElementById('alTestBanner')) return;
        const msg = opts.msg || 'Você está em <u>modo de teste</u>. Crie uma conta para acesso completo.';
        const banner = document.createElement('div');
        banner.id = 'alTestBanner';
        banner.className = 'al-test-banner';
        banner.innerHTML = `
            <span>${msg}</span>
            <a class="al-banner-btn" href="${buildLoginUrl(this._loginPath)}">Criar conta gratuita</a>
        `;
        document.body.insertBefore(banner, document.body.firstChild);
    },

    /**
     * Show a one-time test-mode info popup the first time the guest enters a tool.
     * Uses sessionStorage with the given key so it doesn't repeat in the same session.
     */
    showTestModeIntro(key, title, body) {
        try {
            if (sessionStorage.getItem('al_intro_' + key) === '1') return;
            sessionStorage.setItem('al_intro_' + key, '1');
        } catch (_) { }

        const overlay = document.createElement('div');
        overlay.className = 'al-locked-overlay';
        overlay.innerHTML = `
            <div class="al-locked-box" role="dialog" aria-modal="true">
                <div class="al-locked-icon" style="background:#FFB800;box-shadow:0 12px 28px rgba(255,184,0,.45)">${LOCK_ICON_SVG}</div>
                <h3>${title || 'Modo de teste'}</h3>
                <p>${body || 'Você está usando esta ferramenta no modo de teste. Algumas funções estão limitadas. Crie uma conta gratuita para ter acesso total.'}</p>
                <div class="al-locked-actions">
                    <a class="al-btn" href="${buildLoginUrl(this._loginPath)}">Criar conta / Entrar</a>
                    <button type="button" class="al-btn al-secondary" id="alIntroClose">Continuar como visitante</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        const close = () => overlay.remove();
        overlay.querySelector('#alIntroClose').addEventListener('click', close);
        overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    }
};

window.AlquiLabAuth = AlquiLabAuth;
export default AlquiLabAuth;
