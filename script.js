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
  });