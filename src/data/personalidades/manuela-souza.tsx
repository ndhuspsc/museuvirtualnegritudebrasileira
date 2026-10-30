import type { Personalidade } from "../../types";
import {
  Paragrafo,
  Citacao,
  Subtitulo,
  TituloSecao,
  ListaCuriosidades,
  Curiosidade,
  ListaReferencias,
  Referencia,
} from "../../components/conteudo";

export const manuelaSouza: Personalidade = {
  destaque: false,
  nome: "Manuela da Silva Souza",
  indexTexto:
    "Matemática soteropolitana que transforma a complexidade da Álgebra em pontes para a vida real, sendo uma das maiores vozes sobre diversidade nas Ciências Exatas do Brasil.",
  fotoBanner: "/Assets/ManuelaSouza/fundo.jpg",
  fotoPerfil: "/Assets/ManuelaSouza/ManuelaSouza.png",
  artistaLink: "https://www.instagram.com/zeitouniarts",
  artistaArroba: "@zeitouniarts",

  origem: (
    <>
      <Paragrafo className="fs-5">
        Manuela da Silva Souza nasceu em Salvador, Bahia. Crescendo em uma cidade
        de forte presença e herança negra, ela logo percebeu a ausência de
        representatividade na base da pirâmide da sociedade e no universo
        acadêmico brasileiro, que é majoritariamente branco e masculino nas
        exatas.
      </Paragrafo>
      <Paragrafo className="mt-3">
        Desbravando espaços, Manuela rompeu um ciclo histórico: foi a primeira
        pessoa de toda a sua família a ingressar em uma universidade e a
        conquistar o título de doutora.
      </Paragrafo>
      <Paragrafo className="mt-3">
        Sua jornada começou na Universidade Federal da Bahia (UFBA), onde iniciou
        em Licenciatura, mas durante o percurso descobriu sua afinidade para o
        bacharelado e o mestrado em Matemática. Em seguida, alcançou o doutorado
        pela Universidade Estadual de Campinas (UNICAMP), experiência enriquecida
        por um período de intercâmbio sanduíche na Università degli Studi di
        Palermo, na Itália. Para ampliar ainda mais sua pesquisa, realizou
        pós-doutorados na Universidade de São Paulo (USP) e retornou para mais um
        pós-doutorado na UNICAMP.
      </Paragrafo>
    </>
  ),

  feitos: (
    <>
      <Subtitulo>Desmistificando a Matemática</Subtitulo>
      <Paragrafo>
        Atualmente, a Dra. Manuela é Professora Associada na UFBA, atuando na
        área de Álgebra. Sua pesquisa é focada na{" "}
        <strong>Teoria de Identidades Polinomiais</strong>, que busca identificar
        padrões intrínsecos e comportamentos estruturais em sistemas de álgebra
        abstrata.
      </Paragrafo>
      <Paragrafo className="mt-3">
        Apesar de sua pesquisa ser extremamente avançada, Manuela possui o
        talento de traduzir a teoria para leigos. Em suas palestras para alunos e
        público geral, ela comprova que a Álgebra pode modelar a natureza. Ela
        ensina os conceitos matemáticos usando a biologia como ferramenta:
        utiliza matrizes algébricas abstratas para calcular probabilidades de
        cruzamento genético de animais (como prever características dominantes de
        pelagem) e sistemas lineares para antever o equilíbrio de ecossistemas
        nas relações "Presa-Predador" (modelando o crescimento de populações de
        corujas e ratos com o passar dos meses).
      </Paragrafo>
      <Paragrafo className="mt-3">
        Graças a essa excelência didática e de pesquisa, ela assumiu cargos de
        liderança fundamentais, como a Coordenação do Programa de Pós-Graduação
        em Matemática da UFBA entre janeiro de 2019 e maio de 2021.
      </Paragrafo>
    </>
  ),

  impacto: (
    <>
      <TituloSecao>Ciência, Gênero e Diversidade</TituloSecao>
      <Paragrafo>
        A Matemática é historicamente uma das áreas mais elitizadas do país. Como
        cientista negra, Manuela frequentemente encontra poucos pares raciais em
        congressos e lideranças, relatando a solidão de buscar referências ao
        longo da carreira acadêmica. Ao perceber o silenciamento das mulheres
        nesse campo, ela se transformou em ativista para mudar as estruturas
        institucionais.
      </Paragrafo>
      <Citacao>
        "A ciência precisa da diversidade. Quanto maior a quantidade de pontos de
        vista diferentes você tiver, mais chances tem de resolver um problema."
      </Citacao>
      <Paragrafo>
        Sua atuação política e social é notória: Manuela faz parte do{" "}
        <strong>Grupo de Matemáticas Negras</strong> e já participou da Comissão
        de Gênero da SBM/SBMAC (Sociedade Brasileira de Matemática Aplicada e
        Computacional) e da Comissão de Relações Étnico-Raciais da SBM.{" "}
      </Paragrafo>
      <Paragrafo>
        Ela utiliza a sua trajetória para incentivar o debate sobre bolsas de
        permanência, cotas e acesso à informação, argumentando que incluir
        pessoas negras, mulheres e periféricos na matemática não é apenas justiça
        social, mas uma garantia de aprimoramento na inteligência coletiva e
        inovação para o país.
      </Paragrafo>
    </>
  ),

  curiosidades: (
    <>
      <TituloSecao>Fatos Marcantes</TituloSecao>
      <ListaCuriosidades>
        <Curiosidade numero="01">
          <strong>Pioneirismo Familiar:</strong> Ela é o primeiro membro de toda
          a sua árvore genealógica a sentar em uma cadeira de universidade e a
          concluir um doutorado acadêmico.
        </Curiosidade>
        <Curiosidade numero="02">
          <strong>Fórmula na Natureza:</strong> Para engajar os alunos com
          estruturas algébricas difíceis, ela utiliza modelagem matemática de
          populações biológicas e ecossistemas (ecologia matemática) mostrando a
          Álgebra Linear operando "invisível" na vida selvagem.
        </Curiosidade>
        <Curiosidade numero="03">
          <strong>Farol Científico:</strong> Sem referências negras durante sua
          formação, Manuela tornou-se, hoje, o espelho que ela não teve para
          centenas de meninas que desejam ingressar na ciência.
        </Curiosidade>
        <Curiosidade numero="04">
          <strong>Impacto Nacional:</strong> Sua importância política abriu
          discussões inéditas nos altos escalões da Sociedade Brasileira de
          Matemática para enfrentar o viés racial nas Ciências Exatas.
        </Curiosidade>
      </ListaCuriosidades>
    </>
  ),

  referencias: (
    <>
      <TituloSecao>Fontes e Leituras</TituloSecao>
      <ListaReferencias>
        <Referencia>
          GÊNERO E NÚMERO. <em>[DOC.GN] Potência N</em>. Documentário YouTube,
          2018. Disponível em:{" "}
          <a
            href="https://www.youtube.com/watch?v=untetrh5MyM"
            target="_blank"
            rel="noopener"
          >
            youtube.com/watch?v=untetrh5MyM
          </a>
        </Referencia>
        <Referencia>
          MATFEST.{" "}
          <em>
            Palestra 1: Manuela da Silva Souza (UFBA) - Álgebra Linear Aplicada
          </em>
          . YouTube, 2021. Disponível em:{" "}
          <a
            href="https://www.youtube.com/watch?v=00E8gvAP9Vk"
            target="_blank"
            rel="noopener"
          >
            youtube.com/watch?v=00E8gvAP9Vk
          </a>
        </Referencia>
        <Referencia>
          MATEMÁTICAS NEGRAS. <em>Vídeo Manifesto e Histórico</em>. Facebook.
          Disponível em:{" "}
          <a
            href="https://www.facebook.com/watch/?v=1958904557576620"
            target="_blank"
            rel="noopener"
          >
            facebook.com/watch
          </a>
        </Referencia>
        <Referencia>
          SBM/UFBA. <em>Biografia Acadêmica: Manuela da Silva Souza</em>. Portal
          Oficial Institucional.
        </Referencia>
      </ListaReferencias>
    </>
  ),
};
