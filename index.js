    document.addEventListener("DOMContentLoaded", function() {
      const containerDestaque = document.getElementById("secao-destaque");  
      const gridGeral = document.getElementById("grid-exposicoes");
      containerDestaque.innerHTML = "";  
      gridGeral.innerHTML = "";
        
      for (const id in bancoDeDados) {
              const expo = bancoDeDados[id];

              if (expo.destaque) {
                  // Renderiza o Banner de Destaque Gigante no topo
                  containerDestaque.innerHTML = `
                    <div class="p-5 mb-5 rounded-4 text-white position-relative overflow-hidden shadow-lg" style="background-color: var(--teal-dark);">
                      <div class="row align-items-center position-relative" style="z-index: 2;">
                        <div class="col-md-5 text-center mb-4 mb-md-0">
                          <img src="${expo.fotoPerfil}" alt="${expo.nome}" class="img-fluid rounded-circle shadow" style="max-height: 280px; border: 4px solid var(--gold);">
                        </div>
                        <div class="col-md-7">
                          <span class="badge mb-2" style="background-color: var(--gold); font-family: 'Oswald', sans-serif; letter-spacing: 0.1em; text-transform: uppercase;">Em Destaque Agora</span>
                          <h2 style="font-family: 'Playfair Display', serif; font-size: 2.5rem; margin-bottom: 15px;">${expo.nome}</h2>
                          <p class="lead mb-4" style="color: var(--teal-light);">${expo.indexTexto}</p>
                          <a href="exposicao.html?id=${id}" class="btn btn-light px-4 py-2" style="font-family: 'Oswald', sans-serif; text-transform: uppercase; letter-spacing: 0.1em; color: var(--teal-dark);">Visitar Exposição Principal</a>
                        </div>
                      </div>
                    </div>
                  `;
              } else {
                  // Renderiza os demais normalmente no grid debaixo
                  gridGeral.innerHTML += `
                    <div class="col-md-5">
                      <a href="exposicao.html?id=${id}" class="museum-card">
                        <img src="${expo.fotoPerfil}" alt="Exposição ${expo.nome}">
                        <div class="card-body">
                          <h3>${expo.nome}</h3>
                          <p>${expo.indexTexto}</p>
                          <span class="btn btn-outline-dark mt-2" style="font-family: 'Oswald', sans-serif; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.1em;">Visitar Sala</span>
                        </div>
                      </a>
                    </div>
                  `;
              }
          }
    });