  // main.js
  document.addEventListener("DOMContentLoaded", function() {
      
    
    const headerPlaceholder = document.getElementById("header-placeholder");
    if(headerPlaceholder){
        headerPlaceholder.innerHTML=`
                <header id="site-header">
                <div class="header-center" style="flex: 1; text-align: center;">
                    <h1>Museu Virtual</h1>
                    <p>Negritude Brasileira</p>
                </div>
                </header>
                `;
    }
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
          <!-- Banner de Cookies LGPD -->
          <div id="cookie-banner" class="cookie-banner">
            <p>
              Utilizamos cookies de análise para melhorar sua experiência no Museu Virtual.<br> Ao continuar navegando, você concorda com a nossa política.
            </p>
            <button id="aceitar-cookies" class="btn btn-sm btn-light text-dark fw-bold">Entendido</button>
          </div>
            <footer id="site-footer">
              <p style="color: #f5e6d8; font-size: 0.85rem; margin-bottom: 12px; opacity: 0.8;">
                  Uma iniciativa dos projetos de extensão
                  <strong>Núcleo de Direitos Humanos</strong> e
                  <strong>Museu Virtual do ICMC</strong> — USP São Carlos
               </p>
              <div class="footer-contact">
                <a href="https://www.instagram.com/ndh.usp.sc/" target="_blank" rel="noopener">
                  <i class="bi bi-instagram"></i>
                  @ndh.usp.sc
                </a>
                <a href="mailto:ndhuspsc@gmail.com">
                  <i class="bi bi-envelope"></i>
                  ndhuspsc@gmail.com
                </a>
              </div>
            </footer>
        `;
    }

    const banner = document.getElementById("cookie-banner");
    const botaoAceitar = document.getElementById("aceitar-cookies");

    // Verifica se o usuário já aceitou os cookies anteriormente
    if (!localStorage.getItem("cookie_aceito")) {
        banner.style.display = "flex"; // Mostra o banner se for a primeira vez
    }

    // Quando o usuário clicar em "Entendido"
    botaoAceitar.addEventListener("click", function() {
        localStorage.setItem("cookie_aceito", "true"); // Salva a escolha
        banner.style.display = "none"; // Esconde o banner suavemente
    });
  });