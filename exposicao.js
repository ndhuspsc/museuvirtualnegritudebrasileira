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

    

});