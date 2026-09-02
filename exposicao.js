document.addEventListener("DOMContentLoaded", function() {
    

    // 1. Captura o parâmetro "id" da URL (ex: ?id=luiz-gama)
    const parametros = new URLSearchParams(window.location.search);
    const idPersonalidade = parametros.get("id");

    // 2. Busca no arquivo acervo.js
    const dados = bancoDeDados[idPersonalidade];
    if (!dados) {
            alert("Exposição não encontrada!");
            window.location.href = "index.html";
            return; // Para a execução do script
        }
        
    // 3. Se a personalidade existir, injeta os dados no HTML
    if (dados) {
        document.getElementById("page-title").innerText = `Museu Virtual | Negritudes Brasileiras — ${dados.nome}`;
        document.getElementById("img-banner").src = dados.fotoBanner;
        document.getElementById("img-perfil").src = dados.fotoPerfil;
        
        document.getElementById("link-artista").href = dados.artistaLink;
        document.getElementById("nome-artista").innerText = dados.artistaArroba;
        
        document.getElementById("conteudo-origem").innerHTML = dados.origemHTML;
        document.getElementById("conteudo-feitos").innerHTML = dados.feitosHTML;
        
        document.getElementById("conteudo-impacto").innerHTML = dados.impactoHTML;
        document.getElementById("conteudo-curiosidades").innerHTML = dados.curiosidadesHTML;
        document.getElementById("conteudo-referencias").innerHTML = dados.referenciasHTML;
    } else {
        // Se alguém digitar um ID errado na URL, mostra uma mensagem de erro
        document.querySelector("main").innerHTML = "<h2 style='text-align:center; margin-top:50px;'>Exposição não encontrada.</h2>";
    }

   // Exemplo de como o JavaScript da página de exposição pode montar o link do Forms com o nome da personalidade:
    const nomePersonalidade = dados.nome; // Ex: "Luiz Gama"
    const idDaPerguntaNoForms = "110415446"; // O número que você descobriu no passo 2

    // Cria o link dinamicamente
    const linkFormsDinamico = `https://docs.google.com/forms/d/e/1FAIpQLSen1Nn49eSJVFsBpm1HkDdbMkBlGdt2wQA8-EriGywj7F7F5w/viewform?usp=pp_url&entry.${idDaPerguntaNoForms}=${encodeURIComponent(nomePersonalidade)}`;

    // Joga o link no botão de feedback da página
    const botaoFeedback = document.getElementById("btn-feedback");
    
    botaoFeedback.href = linkFormsDinamico; 
    
    if (botaoFeedback) {
        botaoFeedback.addEventListener("click", function() {
            // Dispara o evento personalizado para o Vercel Analytics
            if (typeof va === "function") {
                va.track('clique_enquete', { local: 'Pagina de Exposição' });
            }
        });
    }

});