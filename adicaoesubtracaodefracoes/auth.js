(() => {
  const SENHA = "9141";
  const KEY = "site_bloqueado";

  try {
    const bloqueado = localStorage.getItem(KEY) === "true";
    if (!bloqueado) return;

    // Não bloqueia a própria página de controle
    const file = (location.pathname.split('/').pop() || "").toLowerCase();
    if (file === "controle.html") return;

    const next = location.href;
    const senha = prompt("Site bloqueado. Digite a senha:");

    if (senha !== SENHA) {
      // Redireciona para a página de controle e não mostra nada da página atual
      document.documentElement.innerHTML = "";
      // guarda para voltar depois
      try { sessionStorage.setItem("controle_next", next); } catch(e) {}
      location.replace("controle.html?next=" + encodeURIComponent(next));
      return;
    }
  } catch (e) {
    // Se localStorage estiver indisponível, não bloqueia (comportamento seguro para o site)
    return;
  }
})();
