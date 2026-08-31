    document.addEventListener("DOMContentLoaded", function() {
        const grid = document.getElementById("grid-exposicoes");
        grid.innerHTML = "";

        
        for (const id in bancoDeDados) {
            const expo = bancoDeDados[id];

            const cardHTML = `
              <div class="col-md-6">
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
            grid.innerHTML += cardHTML;
        }
    });