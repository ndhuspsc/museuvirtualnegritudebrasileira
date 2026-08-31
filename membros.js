document.addEventListener("DOMContentLoaded", function() {
    
    // O link público do CSV gerado pelo Google Sheets
    const urlPlanilha = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQB8-lf9fJE0mM2dLV5bDEe7Flmejil4lLB6WHtLReZBgar0WeNQW2T0B80Rzwx1tUOiWJN9q1Sxhpm/pub?output=csv";

    // O PapaParse faz o fetch e converte os dados automaticamente
    Papa.parse(urlPlanilha, {
        download: true,
        header: true, // Transforma a primeira linha da planilha nas chaves do objeto
        skipEmptyLines: true,
        complete: function(resultados) {
            // resultados.data contém o Array de Objetos da planilha
            renderizarEquipe(resultados.data);
        },
        error: function(erro) {
            console.error("Erro ao ler a planilha:", erro);
        }
    });

    function renderizarEquipe(membros) {
        const container = document.getElementById("grid-equipe");
        container.innerHTML = ""; // Limpa a mensagem de "Carregando"

        membros.forEach(membro => {
            // 1. Converte o link do Drive para um link direto de imagem
            let linkFoto = membro["Foto para o perfil no site"];
            if (linkFoto && linkFoto.includes("drive.google.com")) {
                const id = linkFoto.match(/[-\w]{25,}/); // Captura o ID da imagem
                if (id) {
                    linkFoto = `https://lh3.googleusercontent.com/d/${id[0]}`;
                }
            }

            // 2. Padroniza a string para o filtro E cria as "etiquetas" (badges) visuais
            let categoriasAtuais = "";
            let badgesHTML = "";

            if (membro["Funções"]) {
                // Padroniza a string para o filtro funcionar (ex: "design pesquisa")
                categoriasAtuais = membro["Funções"].toLowerCase().replace(/,\s*/g, ' ');

                // Separa as funções pela vírgula para criar os badges individuais
                const listaFuncoes = membro["Funções"].split(',');

                listaFuncoes.forEach(funcao => {
                    let funcLimpa = funcao.trim(); // Remove espaços em branco
                    let funcLower = funcLimpa.toLowerCase();
                    let icone = "bi-star"; // Ícone padrão

                    // Sistema inteligente que escolhe o ícone baseado no nome da função
                    if (funcLower.includes("desenvolvimento")) icone = "bi-laptop";
                    else if (funcLower.includes("pesquisa")) icone = "bi-book";
                    else if (funcLower.includes("design")) icone = "bi-palette";
                    else if (funcLower.includes("marketing")) icone = "bi-megaphone";
                    else if (funcLower.includes("coordena")) icone = "bi-star-fill";

                    // Adiciona o HTML do badge na nossa variável
                    badgesHTML += `
                      <div class="mb-2">
                        <span class="team-badge"><i class="bi ${icone}"></i> ${funcLimpa}</span>
                      </div>
                    `;
                });
            }


            const descricaoTexto = membro["Descrição"] ? membro["Descrição"] : "";

            // 3. Monta o HTML injetando os badges dinâmicos e a nova descrição
            const cartaoHTML = `
                <div class="col-12 col-sm-6 col-lg-3 team-member" data-category="${categoriasAtuais}">
                  <div class="team-card">
                    <div class="team-card-img-wrapper">
                      <img src="${linkFoto}" alt="Foto de ${membro["Nome completo"]}" onerror="this.src='https://via.placeholder.com/300x250?text=Sem+Foto'">
                    </div>
                    <div class="team-card-body">
                      <h3 class="team-card-title">${membro["Nome completo"]}</h3>
                      
                      <!-- Aqui entram os badges dinâmicos -->
                      ${badgesHTML}
                      
                      <!-- Aqui entra a descrição (com uma margem superior 'mt-2') -->
                      <p class="team-card-desc mt-2">${descricaoTexto}</p>
                      
                      <!-- Adicionado 'mt-auto' para empurrar o LinkedIn sempre para o fundo do cartão -->
                      <div class="team-social mt-auto pt-3">
                        <a href="${membro["Linkedin"]}" target="_blank" rel="noopener">
                          <i class="bi bi-linkedin"></i> LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            `;
            
            container.innerHTML += cartaoHTML;
        });

        
        inicializarFiltros();
    }

    function inicializarFiltros() {
        const filterButtons = document.querySelectorAll('.team-filter .nav-link');
        const teamCards = document.querySelectorAll('.team-member');

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove a classe 'active' de todos os botões
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Adiciona 'active' no botão clicado
                this.classList.add('active');
                
                // Pega o valor do filtro selecionado e garante que é minúsculo
                const filterValue = this.getAttribute('data-filter').toLowerCase();

                // Mostra ou esconde os cartões
                teamCards.forEach(card => {
                    // Pega as categorias do cartão, separa por espaço e cria um array
                    const cardCategories = card.getAttribute('data-category').split(' ');

                    // Verifica se clicou em 'todos' OU se o array inclui a categoria do botão
                    if (filterValue === 'todos' || cardCategories.includes(filterValue)) {
                        card.style.display = ''; // Mantém o layout do Bootstrap
                    } else {
                        card.style.display = 'none'; // Esconde o cartão
                    }
                });
            });
        });
    }

});