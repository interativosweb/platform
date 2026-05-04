/* ============================================================
   E Agora Prof? — Login Modal (overlay reutilizável)
   ------------------------------------------------------------
   Carrega como módulo em qualquer página e expõe:
   - window.openLoginModal({ next })   abre o overlay
   - window.closeLoginModal()          fecha o overlay
   - Após login/cadastro: redireciona para `next` se fornecido,
     ou recarrega a página atual para refletir o estado de auth.
   ============================================================ */
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
    getDatabase,
    ref,
    set,
    push,
    get
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAAHGPjuRvE9VpHR469A5RbSEUzxl1zq2w",
    authDomain: "profbase-5f9b0.firebaseapp.com",
    databaseURL: "https://profbase-5f9b0-default-rtdb.firebaseio.com",
    projectId: "profbase-5f9b0",
    storageBucket: "profbase-5f9b0.firebasestorage.app",
    messagingSenderId: "826412057766",
    appId: "1:826412057766:web:729e6e24ce7587417fe067"
};

// Reusa o app Firebase já inicializado pela página, ou cria um novo
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const ESTADOS = [
    { nome: "Acre", id: 12 }, { nome: "Alagoas", id: 27 },
    { nome: "Amapá", id: 16 }, { nome: "Amazonas", id: 13 },
    { nome: "Bahia", id: 29 }, { nome: "Ceará", id: 23 },
    { nome: "Distrito Federal", id: 53 }, { nome: "Espírito Santo", id: 32 },
    { nome: "Goiás", id: 52 }, { nome: "Maranhão", id: 21 },
    { nome: "Mato Grosso", id: 51 }, { nome: "Mato Grosso do Sul", id: 50 },
    { nome: "Minas Gerais", id: 31 }, { nome: "Pará", id: 15 },
    { nome: "Paraíba", id: 25 }, { nome: "Paraná", id: 41 },
    { nome: "Pernambuco", id: 26 }, { nome: "Piauí", id: 22 },
    { nome: "Rio de Janeiro", id: 33 }, { nome: "Rio Grande do Norte", id: 24 },
    { nome: "Rio Grande do Sul", id: 43 }, { nome: "Rondônia", id: 11 },
    { nome: "Roraima", id: 14 }, { nome: "Santa Catarina", id: 42 },
    { nome: "São Paulo", id: 35 }, { nome: "Sergipe", id: 28 },
    { nome: "Tocantins", id: 17 }
];

const CSS = `
.lm-overlay {
    position: fixed; inset: 0;
    background: rgba(20, 26, 50, .18);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    display: none;
    align-items: center; justify-content: center;
    padding: 32px 20px;
    z-index: 99998;
    overflow-y: auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #00010D;
    line-height: 1.5;
    font-weight: 400;
    animation: lmFadeIn .25s ease;
}
.lm-overlay.lm-show { display: flex; }
.lm-wrap {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;
    width: 100%;
    animation: lmPopIn .45s cubic-bezier(.16, 1, .3, 1);
}
.lm-toggle-mode {
    text-align: center; margin-top: 22px;
    padding-top: 18px; border-top: 1px solid #F2F2F2;
    font-size: .9rem; color: #8b91a8; font-weight: 400;
}
.lm-toggle-mode a {
    color: #00b300; text-decoration: none; font-weight: 500;
    cursor: pointer; margin-left: 4px; transition: opacity .2s;
}
.lm-popup-signup .lm-toggle-mode a { color: #00803c; }
.lm-toggle-mode a:hover { opacity: .7; }

@keyframes lmFadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes lmPopIn { from { opacity: 0; transform: translateY(18px) scale(.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
@keyframes lmSpin { to { transform: rotate(360deg); } }

.lm-popup {
    background: #FFFFFF;
    border-radius: 22px;
    box-shadow: 0 24px 60px rgba(20, 26, 50, .22);
    overflow: hidden;
    display: flex; flex-direction: column;
    position: relative;
}
.lm-popup-login  { width: 420px; max-width: 100%; }
.lm-popup-signup { width: 720px; max-width: 100%; }
.lm-popup.lm-hidden { display: none; }

.lm-popup-body {
    padding: 28px 30px 24px;
    display: flex; flex-direction: column; flex: 1;
}
.lm-popup-header { margin-bottom: 18px; }
.lm-popup-signup .lm-popup-header { margin-bottom: 16px; }
.lm-popup-tag {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 5px 12px; border-radius: 999px;
    font-size: .72rem; font-weight: 500;
    letter-spacing: .4px; text-transform: uppercase;
    margin-bottom: 12px;
}
.lm-popup-login  .lm-popup-tag { background: #d4f5d2; color: #00b300; }
.lm-popup-signup .lm-popup-tag { background: #cef0e0; color: #00803c; }
.lm-popup-title {
    font-size: 1.45rem; font-weight: 500;
    letter-spacing: -.4px; color: #00010D; margin-bottom: 4px;
}
.lm-popup-sub { font-size: .9rem; color: #8b91a8; font-weight: 400; }

.lm-popup-close {
    position: absolute; top: 14px; right: 14px;
    width: 32px; height: 32px; border-radius: 50%;
    border: none; background: #F2F2F2; color: #4a5169;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    font-size: .95rem; z-index: 5;
    transition: background .2s ease, color .2s ease, transform .15s ease;
}
.lm-popup-close:hover { background: #E6E6E6; color: #00010D; transform: rotate(90deg); }

.lm-form-group { margin-bottom: 14px; }
.lm-form-row { display: flex; gap: 10px; }
.lm-form-row .lm-form-group { flex: 1; margin-bottom: 14px; }
.lm-form-label {
    display: block; font-size: .76rem; font-weight: 500;
    color: #8b91a8; letter-spacing: .3px; margin-bottom: 6px;
}
.lm-form-input, .lm-form-select {
    width: 100%; padding: 12px 14px;
    background: #F2F2F2; border: 1.5px solid transparent;
    border-radius: 14px; color: #00010D;
    font-size: .94rem; font-family: inherit; font-weight: 400;
    outline: none; transition: all .25s ease;
}
.lm-form-input::placeholder { color: #b6bccf; font-weight: 400; }
.lm-form-input:focus, .lm-form-select:focus {
    background: #fff; border-color: #00b300;
    box-shadow: 0 0 0 4px rgba(0, 179, 0, .14);
}
.lm-popup-signup .lm-form-input:focus,
.lm-popup-signup .lm-form-select:focus {
    border-color: #00803c;
    box-shadow: 0 0 0 4px rgba(0, 128, 60, .14);
}
.lm-form-select {
    cursor: pointer; appearance: none; -webkit-appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%238b91a8' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat; background-position: right 14px center;
    padding-right: 36px;
}

.lm-radio-group { display: flex; gap: 8px; }
.lm-radio-option { flex: 1; position: relative; }
.lm-radio-option input[type="radio"] { position: absolute; opacity: 0; width: 0; height: 0; }
.lm-radio-option label {
    display: flex; align-items: center; justify-content: center;
    padding: 11px 12px; background: #F2F2F2;
    border: 1.5px solid transparent; border-radius: 14px;
    color: #8b91a8; font-size: .88rem; font-weight: 500;
    cursor: pointer; transition: all .25s ease; user-select: none;
}
.lm-radio-option label:hover { background: #E6E6E6; color: #00010D; }
.lm-radio-option input[type="radio"]:checked + label {
    background: #00803c; border-color: #00803c; color: #fff;
    box-shadow: 0 4px 12px rgba(0, 128, 60, .25);
}

.lm-forgot-password { text-align: right; margin: -4px 0 12px; }
.lm-forgot-password a {
    font-size: .8rem; color: #00b300; text-decoration: none;
    font-weight: 500; cursor: pointer; transition: opacity .2s;
}
.lm-forgot-password a:hover { opacity: .7; }

.lm-btn-primary {
    width: 100%; padding: 13px; color: #fff; border: none;
    border-radius: 14px; font-size: .96rem; font-family: inherit;
    font-weight: 500; cursor: pointer; margin-top: auto;
    position: relative; overflow: hidden;
    background: #00b300; box-shadow: 0 6px 18px rgba(0, 179, 0, .28);
    transition: transform .15s ease, background .2s ease, box-shadow .25s ease;
}
.lm-btn-primary:hover {
    background: #009c00; transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(0, 156, 0, .32);
}
.lm-btn-primary:active { transform: translateY(0); }
.lm-btn-primary:disabled { opacity: .55; cursor: not-allowed; transform: none; }
.lm-btn-primary .lm-spinner {
    display: none; width: 20px; height: 20px;
    border: 2.5px solid rgba(255,255,255,.25); border-top-color: #fff;
    border-radius: 50%; animation: lmSpin .7s linear infinite; margin: 0 auto;
}
.lm-btn-primary.lm-loading .lm-btn-text { display: none; }
.lm-btn-primary.lm-loading .lm-spinner { display: block; }

.lm-msg-feedback {
    padding: 11px 14px; border-radius: 12px;
    font-size: .82rem; font-weight: 500; margin-bottom: 14px;
    display: none; align-items: center; gap: 8px;
    animation: lmFadeIn .3s ease;
}
.lm-msg-feedback.lm-show { display: flex; }
.lm-msg-feedback.lm-error {
    background: #fff2f0; color: #FF3D00;
    border: 1px solid rgba(255, 61, 0, .15);
}
.lm-msg-feedback.lm-success {
    background: #D6F5E5; color: #00C16E;
    border: 1px solid rgba(0, 193, 110, .15);
}

/* Reset modal (dentro do overlay principal) */
.lm-reset-overlay {
    position: fixed; inset: 0;
    background: rgba(20, 26, 50, .55);
    backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
    z-index: 99999; display: none;
    align-items: center; justify-content: center;
    animation: lmFadeIn .3s ease;
}
.lm-reset-overlay.lm-show { display: flex; }
.lm-reset-box {
    background: #fff; padding: 30px 26px; border-radius: 22px;
    width: 400px; max-width: 90vw; text-align: center;
    box-shadow: 0 30px 80px rgba(0,0,0,.25);
    animation: lmPopIn .3s cubic-bezier(.16,1,.3,1); position: relative;
}
.lm-reset-box .lm-reset-close {
    position: absolute; top: 12px; right: 12px;
    width: 30px; height: 30px; border-radius: 50%;
    border: none; background: #F2F2F2; color: #8b91a8;
    cursor: pointer; font-size: .9rem;
    display: flex; align-items: center; justify-content: center;
    transition: all .2s;
}
.lm-reset-box .lm-reset-close:hover { background: #E6E6E6; color: #00010D; }
.lm-reset-title { font-size: 1.15rem; font-weight: 500; margin-bottom: 6px; color: #00010D; }
.lm-reset-sub { font-size: .84rem; color: #8b91a8; margin-bottom: 18px; font-weight: 400; line-height: 1.5; }
.lm-reset-input {
    width: 100%; padding: 12px 14px; background: #F2F2F2;
    border: 1.5px solid transparent; border-radius: 12px;
    color: #00010D; font-size: .92rem; font-family: inherit;
    font-weight: 400; outline: none; margin-bottom: 12px;
    transition: all .25s ease;
}
.lm-reset-input:focus { border-color: #00b300; background: #fff; box-shadow: 0 0 0 4px rgba(0,179,0,.14); }
.lm-reset-btn {
    width: 100%; padding: 12px; background: #00b300; color: #fff;
    border: none; border-radius: 12px; font-size: .92rem;
    font-weight: 500; cursor: pointer; font-family: inherit;
    transition: background .2s ease, transform .15s ease;
}
.lm-reset-btn:hover { background: #009c00; transform: translateY(-1px); }
.lm-reset-msg { font-size: .8rem; font-weight: 500; margin-top: 12px; display: none; }
.lm-reset-msg.lm-show { display: block; }
.lm-reset-msg.lm-error { color: #FF3D00; }
.lm-reset-msg.lm-success { color: #00C16E; }

@media (max-width: 640px) {
    .lm-overlay { padding: 20px 14px; }
    .lm-popup-body { padding: 24px 20px 22px; }
    .lm-popup-title { font-size: 1.25rem; }
    .lm-form-row { flex-direction: column; gap: 0; }
}
`;

const HTML = `
<div class="lm-wrap">
    <div class="lm-popup lm-popup-login" id="lmPopupLogin">
        <button class="lm-popup-close" id="lmCloseLogin" title="Fechar">✕</button>
        <div class="lm-popup-body">
            <div class="lm-popup-header">
                <span class="lm-popup-tag">Já tenho conta</span>
                <h2 class="lm-popup-title">Entrar</h2>
                <p class="lm-popup-sub">Acesse sua plataforma de matemática</p>
            </div>
            <div class="lm-msg-feedback" id="lmMsgLogin"><span id="lmMsgLoginText"></span></div>
            <form id="lmFormLogin" autocomplete="off">
                <div class="lm-form-group">
                    <label class="lm-form-label" for="lmLoginEmail">E-mail</label>
                    <input type="email" class="lm-form-input" id="lmLoginEmail" placeholder="seuemail@email.com" autocomplete="email" required />
                </div>
                <div class="lm-form-group">
                    <label class="lm-form-label" for="lmLoginSenha">Senha</label>
                    <input type="password" class="lm-form-input" id="lmLoginSenha" placeholder="Sua senha" autocomplete="current-password" required />
                </div>
                <div class="lm-forgot-password"><a id="lmForgot">Esqueceu a senha?</a></div>
                <button type="submit" class="lm-btn-primary" id="lmBtnLogin">
                    <span class="lm-btn-text">Entrar</span>
                    <div class="lm-spinner"></div>
                </button>
            </form>
            <div class="lm-toggle-mode">Não tem uma conta? <a id="lmGoToSignup">Criar conta</a></div>
        </div>
    </div>

    <div class="lm-popup lm-popup-signup lm-hidden" id="lmPopupSignup">
        <button class="lm-popup-close" id="lmCloseSignup" title="Fechar">✕</button>
        <div class="lm-popup-body">
            <div class="lm-popup-header">
                <span class="lm-popup-tag">Novo por aqui</span>
                <h2 class="lm-popup-title">Criar conta</h2>
                <p class="lm-popup-sub">É grátis e rápido. Preencha seus dados.</p>
            </div>
            <div class="lm-msg-feedback" id="lmMsgSignup"><span id="lmMsgSignupText"></span></div>
            <form id="lmFormSignup" autocomplete="off">
                <div class="lm-form-row">
                    <div class="lm-form-group">
                        <label class="lm-form-label" for="lmSignupNome">Nome completo</label>
                        <input type="text" class="lm-form-input" id="lmSignupNome" placeholder="Ex: João da Silva" autocomplete="name" required />
                    </div>
                    <div class="lm-form-group">
                        <label class="lm-form-label" for="lmSignupUsername">Nome de usuário</label>
                        <input type="text" class="lm-form-input" id="lmSignupUsername" placeholder="ex: joaosilva" autocomplete="username" maxlength="20" required />
                    </div>
                </div>
                <div class="lm-form-row">
                    <div class="lm-form-group">
                        <label class="lm-form-label" for="lmSignupEmail">E-mail</label>
                        <input type="email" class="lm-form-input" id="lmSignupEmail" placeholder="seuemail@email.com" autocomplete="email" required />
                    </div>
                    <div class="lm-form-group">
                        <label class="lm-form-label" for="lmSignupWhatsapp">WhatsApp</label>
                        <input type="tel" class="lm-form-input" id="lmSignupWhatsapp" placeholder="(99) 99999-9999" maxlength="15" required />
                    </div>
                </div>
                <div class="lm-form-row">
                    <div class="lm-form-group">
                        <label class="lm-form-label" for="lmSignupEstado">Estado</label>
                        <select class="lm-form-select" id="lmSignupEstado" required><option value="">Selecione</option></select>
                    </div>
                    <div class="lm-form-group">
                        <label class="lm-form-label" for="lmSignupCidade">Cidade</label>
                        <select class="lm-form-select" id="lmSignupCidade" disabled required><option value="">Estado primeiro</option></select>
                    </div>
                </div>
                <div class="lm-form-row">
                    <div class="lm-form-group">
                        <label class="lm-form-label">Você é aluno ou professor?</label>
                        <div class="lm-radio-group">
                            <div class="lm-radio-option">
                                <input type="radio" id="lmSignupAluno" name="lmSignupTipo" value="aluno" />
                                <label for="lmSignupAluno">Aluno</label>
                            </div>
                            <div class="lm-radio-option">
                                <input type="radio" id="lmSignupProfessor" name="lmSignupTipo" value="professor" />
                                <label for="lmSignupProfessor">Professor</label>
                            </div>
                        </div>
                    </div>
                    <div class="lm-form-group">
                        <label class="lm-form-label" for="lmSignupSenha">Senha</label>
                        <input type="password" class="lm-form-input" id="lmSignupSenha" placeholder="Mínimo 6 caracteres" autocomplete="new-password" required />
                    </div>
                </div>
                <button type="submit" class="lm-btn-primary" id="lmBtnSignup">
                    <span class="lm-btn-text">Criar Conta</span>
                    <div class="lm-spinner"></div>
                </button>
            </form>
            <div class="lm-toggle-mode">Já tem uma conta? <a id="lmGoToLogin">Entrar</a></div>
        </div>
    </div>
</div>

<div class="lm-reset-overlay" id="lmResetOverlay">
    <div class="lm-reset-box">
        <button class="lm-reset-close" id="lmResetClose">✕</button>
        <div class="lm-reset-title">Redefinir Senha</div>
        <div class="lm-reset-sub">Digite seu e-mail e enviaremos um link para redefinir sua senha.</div>
        <input type="email" class="lm-reset-input" id="lmResetEmail" placeholder="Seu e-mail cadastrado" />
        <button class="lm-reset-btn" id="lmResetBtn">Enviar Link</button>
        <div class="lm-reset-msg" id="lmResetMsg"></div>
    </div>
</div>
`;

let injected = false;
let nextRedirect = null;

function injectStyles() {
    if (document.getElementById('lm-styles')) return;
    const style = document.createElement('style');
    style.id = 'lm-styles';
    style.textContent = CSS;
    document.head.appendChild(style);
}

function injectModal() {
    if (injected) return;
    injectStyles();

    const overlay = document.createElement('div');
    overlay.id = 'lmOverlay';
    overlay.className = 'lm-overlay';
    overlay.innerHTML = HTML;
    document.body.appendChild(overlay);

    wireUp(overlay);
    injected = true;
}

function formatarNome(nome) {
    nome = nome.trim();
    if (!nome) return '';
    return nome.toLowerCase().replace(/(^|\s)\S/g, c => c.toUpperCase());
}

function traduzirErro(code) {
    const erros = {
        'auth/email-already-in-use': 'Este e-mail já está cadastrado. Faça login.',
        'auth/invalid-email': 'E-mail inválido. Verifique o formato.',
        'auth/weak-password': 'Senha fraca. Use pelo menos 6 caracteres.',
        'auth/user-not-found': 'Nenhuma conta encontrada com esse e-mail.',
        'auth/wrong-password': 'Senha incorreta. Tente novamente.',
        'auth/invalid-credential': 'E-mail ou senha incorretos.',
        'auth/too-many-requests': 'Muitas tentativas. Aguarde e tente depois.',
        'auth/network-request-failed': 'Erro de conexão. Verifique sua internet.'
    };
    return erros[code] || 'Ocorreu um erro. Tente novamente.';
}

async function registrarLogin(user, nome) {
    const loginRef = push(ref(db, 'logins/' + user.uid));
    const loginKey = loginRef.key;
    await set(loginRef, {
        email: user.email,
        nome: nome || user.displayName || '',
        entrada: new Date().toISOString(),
        saida: '',
        timestampEntrada: Date.now(),
        timestampSaida: 0
    });
    sessionStorage.setItem('alquilab_login_key', loginKey);
    sessionStorage.setItem('alquilab_login_uid', user.uid);
}

function afterAuthSuccess() {
    if (nextRedirect) {
        window.location.href = nextRedirect;
    } else {
        window.location.reload();
    }
}

function wireUp(overlay) {
    const $ = id => overlay.querySelector('#' + id);

    const popupLogin   = $('lmPopupLogin');
    const popupSignup  = $('lmPopupSignup');
    const formLogin    = $('lmFormLogin');
    const formSignup   = $('lmFormSignup');
    const loginEmail   = $('lmLoginEmail');
    const loginSenha   = $('lmLoginSenha');
    const btnLogin     = $('lmBtnLogin');
    const btnSignup    = $('lmBtnSignup');
    const signupNome   = $('lmSignupNome');
    const signupUser   = $('lmSignupUsername');
    const signupEmail  = $('lmSignupEmail');
    const signupSenha  = $('lmSignupSenha');
    const signupWhats  = $('lmSignupWhatsapp');
    const signupEstado = $('lmSignupEstado');
    const signupCidade = $('lmSignupCidade');
    const msgLogin     = $('lmMsgLogin');
    const msgLoginTxt  = $('lmMsgLoginText');
    const msgSignup    = $('lmMsgSignup');
    const msgSignupTxt = $('lmMsgSignupText');

    function showMsg(target, txtEl, msg, type = 'error') {
        txtEl.textContent = msg;
        target.className = 'lm-msg-feedback lm-show lm-' + type;
    }
    function hideMsg(target) { target.className = 'lm-msg-feedback'; }

    // Toggle login/signup
    $('lmGoToSignup').addEventListener('click', () => {
        popupLogin.classList.add('lm-hidden');
        popupSignup.classList.remove('lm-hidden');
        hideMsg(msgLogin);
    });
    $('lmGoToLogin').addEventListener('click', () => {
        popupSignup.classList.add('lm-hidden');
        popupLogin.classList.remove('lm-hidden');
        hideMsg(msgSignup);
    });

    // Fechar
    function fechar() { window.closeLoginModal(); }
    $('lmCloseLogin').addEventListener('click', fechar);
    $('lmCloseSignup').addEventListener('click', fechar);
    overlay.addEventListener('click', e => {
        if (e.target === overlay) fechar();
    });

    // Username sanitização
    signupUser.addEventListener('input', () => {
        signupUser.value = signupUser.value.toLowerCase().replace(/[^a-z0-9._]/g, '');
    });

    // Máscara WhatsApp
    signupWhats.addEventListener('input', () => {
        let v = signupWhats.value.replace(/\D/g, '').substring(0, 11);
        if (v.length > 7)      v = '(' + v.substring(0, 2) + ') ' + v.substring(2, 7) + '-' + v.substring(7);
        else if (v.length > 2) v = '(' + v.substring(0, 2) + ') ' + v.substring(2);
        else if (v.length > 0) v = '(' + v;
        signupWhats.value = v;
    });

    // Estados
    ESTADOS.sort((a, b) => a.nome.localeCompare(b.nome)).forEach(e => {
        const opt = document.createElement('option');
        opt.value = e.nome;
        opt.dataset.ibgeId = e.id;
        opt.textContent = e.nome;
        signupEstado.appendChild(opt);
    });
    signupEstado.addEventListener('change', async () => {
        const selOpt = signupEstado.options[signupEstado.selectedIndex];
        const ibgeId = selOpt?.dataset?.ibgeId;
        signupCidade.innerHTML = '';
        if (!signupEstado.value || !ibgeId) {
            signupCidade.disabled = true;
            signupCidade.appendChild(new Option('Estado primeiro', ''));
            return;
        }
        signupCidade.disabled = true;
        signupCidade.appendChild(new Option('Carregando cidades...', ''));
        try {
            const resp = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + ibgeId + '/municipios?orderBy=nome');
            const cidades = await resp.json();
            signupCidade.innerHTML = '';
            signupCidade.appendChild(new Option('Selecione a cidade', ''));
            cidades.forEach(c => signupCidade.appendChild(new Option(c.nome, c.nome)));
            signupCidade.disabled = false;
        } catch (err) {
            console.error('Erro cidades:', err);
            signupCidade.innerHTML = '';
            signupCidade.appendChild(new Option('Erro. Tente novamente.', ''));
        }
    });

    // LOGIN
    formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();
        hideMsg(msgLogin);
        const email = loginEmail.value.trim();
        const senha = loginSenha.value;
        btnLogin.classList.add('lm-loading');
        btnLogin.disabled = true;
        try {
            const cred = await signInWithEmailAndPassword(auth, email, senha);
            const user = cred.user;
            let nomeLogin = user.displayName || email.split('@')[0] || 'Usuário';
            try {
                const snap = await get(ref(db, 'usuarios/' + user.uid));
                if (snap.exists()) {
                    const perfil = snap.val();
                    if (perfil.nome) nomeLogin = perfil.nome;
                    await set(ref(db, 'usuarios/' + user.uid + '/ultimoLogin'), new Date().toISOString());
                } else {
                    await set(ref(db, 'usuarios/' + user.uid), {
                        nome: nomeLogin, email: user.email, tipo: 'professor',
                        estado: '', cidade: '',
                        dataCriacao: new Date().toISOString(),
                        ultimoLogin: new Date().toISOString()
                    });
                }
            } catch (dbErr) { console.error('Erro DB:', dbErr); }
            await registrarLogin(user, nomeLogin);
            afterAuthSuccess();
        } catch (err) {
            console.error('Erro login:', err);
            showMsg(msgLogin, msgLoginTxt, traduzirErro(err.code));
            btnLogin.classList.remove('lm-loading');
            btnLogin.disabled = false;
        }
    });

    // CADASTRO
    formSignup.addEventListener('submit', async (e) => {
        e.preventDefault();
        hideMsg(msgSignup);
        const nomeRaw  = signupNome.value.trim();
        const username = signupUser.value.trim().toLowerCase();
        const email    = signupEmail.value.trim();
        const senha    = signupSenha.value;
        const whatsapp = signupWhats.value.trim();
        const estado   = signupEstado.value;
        const cidade   = signupCidade.value;
        const tipoSel  = overlay.querySelector('input[name="lmSignupTipo"]:checked');

        if (!nomeRaw)  return showMsg(msgSignup, msgSignupTxt, 'Preencha seu nome completo.');
        if (!username || username.length < 3)
            return showMsg(msgSignup, msgSignupTxt, 'Nome de usuário precisa ter pelo menos 3 caracteres.');
        if (!/^[a-z0-9._]+$/.test(username))
            return showMsg(msgSignup, msgSignupTxt, 'Use apenas letras, números, ponto e underscore no usuário.');
        if (!tipoSel) return showMsg(msgSignup, msgSignupTxt, 'Selecione se você é Aluno ou Professor.');
        if (!estado)  return showMsg(msgSignup, msgSignupTxt, 'Selecione seu estado.');
        if (!cidade)  return showMsg(msgSignup, msgSignupTxt, 'Selecione sua cidade.');
        const whatsDigits = whatsapp.replace(/\D/g, '');
        if (!whatsapp || whatsDigits.length < 10)
            return showMsg(msgSignup, msgSignupTxt, 'Preencha seu WhatsApp corretamente.');

        const nomeFormatado = formatarNome(nomeRaw);
        btnSignup.classList.add('lm-loading');
        btnSignup.disabled = true;
        try {
            const usernameSnap = await get(ref(db, 'usernames/' + username));
            if (usernameSnap.exists()) {
                btnSignup.classList.remove('lm-loading');
                btnSignup.disabled = false;
                return showMsg(msgSignup, msgSignupTxt, 'Esse nome de usuário já está em uso.');
            }
            const cred = await createUserWithEmailAndPassword(auth, email, senha);
            const user = cred.user;
            await updateProfile(user, { displayName: nomeFormatado });
            await set(ref(db, 'usuarios/' + user.uid), {
                nome: nomeFormatado, username, email,
                tipo: tipoSel.value, estado, cidade, whatsapp,
                dataCriacao: new Date().toISOString(),
                ultimoLogin: new Date().toISOString()
            });
            await set(ref(db, 'usernames/' + username), user.uid);
            await registrarLogin(user, nomeFormatado);
            afterAuthSuccess();
        } catch (err) {
            console.error('Erro cadastro:', err);
            if (err.code === 'PERMISSION_DENIED' || (err.message && err.message.includes('PERMISSION_DENIED'))) {
                showMsg(msgSignup, msgSignupTxt, 'Conta criada, mas erro ao salvar perfil. Verifique as regras do Firebase.');
            } else {
                showMsg(msgSignup, msgSignupTxt, traduzirErro(err.code));
            }
            btnSignup.classList.remove('lm-loading');
            btnSignup.disabled = false;
        }
    });

    // RESET DE SENHA
    const resetOverlay = $('lmResetOverlay');
    const resetClose   = $('lmResetClose');
    const resetBtn     = $('lmResetBtn');
    const resetEmail   = $('lmResetEmail');
    const resetMsg     = $('lmResetMsg');

    $('lmForgot').addEventListener('click', () => {
        resetOverlay.classList.add('lm-show');
        resetEmail.value = loginEmail.value || '';
        resetMsg.className = 'lm-reset-msg';
        resetMsg.textContent = '';
    });
    resetClose.addEventListener('click', () => resetOverlay.classList.remove('lm-show'));
    resetOverlay.addEventListener('click', (e) => {
        if (e.target === resetOverlay) resetOverlay.classList.remove('lm-show');
    });
    resetBtn.addEventListener('click', async () => {
        const email = resetEmail.value.trim();
        if (!email) {
            resetMsg.textContent = 'Digite um e-mail válido.';
            resetMsg.className = 'lm-reset-msg lm-show lm-error';
            return;
        }
        resetBtn.disabled = true;
        resetBtn.textContent = 'Enviando...';
        try {
            await sendPasswordResetEmail(auth, email);
            resetMsg.textContent = 'Link de redefinição enviado! Verifique seu e-mail.';
            resetMsg.className = 'lm-reset-msg lm-show lm-success';
            setTimeout(() => resetOverlay.classList.remove('lm-show'), 3000);
        } catch (err) {
            console.error(err);
            if (err.code === 'auth/user-not-found')      resetMsg.textContent = 'Nenhuma conta encontrada com esse e-mail.';
            else if (err.code === 'auth/invalid-email')  resetMsg.textContent = 'E-mail inválido. Verifique o formato.';
            else                                          resetMsg.textContent = 'Erro ao enviar. Tente novamente.';
            resetMsg.className = 'lm-reset-msg lm-show lm-error';
        } finally {
            resetBtn.disabled = false;
            resetBtn.textContent = 'Enviar Link';
        }
    });
    resetEmail.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') resetBtn.click();
    });

    // Esc para fechar
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('lm-show')) {
            if (resetOverlay.classList.contains('lm-show')) {
                resetOverlay.classList.remove('lm-show');
            } else {
                fechar();
            }
        }
    });
}

// API pública
window.openLoginModal = function (opts = {}) {
    injectModal();
    nextRedirect = opts.next || null;
    const overlay = document.getElementById('lmOverlay');
    // Sempre abre na tela de Entrar
    overlay.querySelector('#lmPopupLogin').classList.remove('lm-hidden');
    overlay.querySelector('#lmPopupSignup').classList.add('lm-hidden');
    overlay.classList.add('lm-show');
    document.body.style.overflow = 'hidden';
};

window.closeLoginModal = function () {
    const overlay = document.getElementById('lmOverlay');
    if (overlay) overlay.classList.remove('lm-show');
    const reset = document.getElementById('lmResetOverlay');
    if (reset) reset.classList.remove('lm-show');
    document.body.style.overflow = '';
};

export { auth, db };
