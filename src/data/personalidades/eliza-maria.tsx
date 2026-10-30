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

export const elizaMaria: Personalidade = {
  nome: "Eliza Maria Ferreira Veras da Silva",
  indexTexto:
    "A primeira mulher negra doutora em Matemática do Brasil, que desbravou a álgebra avançada na França e abriu caminhos históricos nas ciências exatas.",
  fotoBanner: "/Assets/ElizaMaria/fundo.jpg",
  fotoPerfil: "/Assets/ElizaMaria/elizamaria.png",
  artistaLink: "#",
  artistaArroba: "Acervo Museu Virtual",

  origem: (
    <>
      <Paragrafo>
        Eliza Maria Ferreira Veras da Silva nasceu no dia 4 de fevereiro de 1944,
        na cidade de Ituberá, no interior da Bahia. Filha de um casamento
        inter-racial entre Dahil Ferreira, dona de casa, e Edgard Moreira Rosa,
        funcionário da Receita, viu a sua infância mudar drasticamente aos três
        anos de idade, quando o seu pai desapareceu. A partir desse momento, a
        sua mãe passou a sustentar sozinha os cinco filhos através da confeção e
        venda de bordados.
      </Paragrafo>
      <Paragrafo>
        Após passar por Gandu, a família estabeleceu-se em Jequié na casa da avó,
        quando Eliza tinha cerca de sete anos. Para ingressar na Escola Normal
        mais conceituada da cidade — um espaço particular frequentado pela elite
        local —, conseguiu uma bolsa de estudos sob a condição de ser aprovada no
        exame de admissão. Eliza passou em{" "}
        <strong>1º lugar com média 9,4</strong>, momento em que enfrentou de
        forma marcante o racismo ao ouvir mães de outras alunas comentarem na
        praça que o primeiro lugar tinha ficado com <i>"uma neguinha aí"</i>.
      </Paragrafo>
      <Citacao>
        "Você tem que dar o seu melhor naquilo que você pode fazer, que é a
        aquisição de conhecimento. Ninguém pode tirar isso de você, conhecimento
        adquirido nunca lhe é tirado."
      </Citacao>
      <Paragrafo>
        Durante o curso pedagógico, como a bolsa passou a ser parcial,
        complementava a renda dando aulas particulares a colegas. Concluiu os três
        anos mantendo <strong>nota 10 em todas as disciplinas</strong> — um feito
        tão extraordinário que levou o próprio diretor da escola a conferir
        caderneta por caderneta por duvidar da sua nota, pedindo-lhe perdão na
        véspera da formatura. Esse mérito rendeu-lhe duas bolsas de estudo da
        empresa holandesa Phillips, dando-lhe o impulso financeiro para mudar-se
        para Salvador e prestar o vestibular.
      </Paragrafo>
      <Paragrafo>
        Em Salvador, conciliando uma rotina exaustiva como professora primária e
        explicadora particular, prestou vestibular para Matemática na
        Universidade Federal da Bahia (UFBA) em 1964, sendo aprovada em{" "}
        <strong>2º lugar</strong>. Formou-se em 1967 nas duas habilitações
        (Licenciatura e Bacharelado) e, pouco depois, tornou-se docente do
        Instituto de Matemática da UFBA.
      </Paragrafo>
    </>
  ),

  feitos: (
    <>
      <Subtitulo>Da Antropologia Matemática às Álgebras Não Associativas</Subtitulo>
      <Paragrafo>
        Com o apoio de outras mulheres pioneiras do instituto, Eliza conquistou
        uma bolsa da UNESCO para realizar a pós-graduação na França, na
        Universidade de Montpellier, sob a orientação do matemático Artibano
        Micali. Em 1973, defendeu o seu mestrado e, em 1977, com bolsa do governo
        francês, concluiu o seu doutoramento, tornando-se a{" "}
        <strong>primeira mulher negra doutora em Matemática do Brasil</strong> e a
        primeira docente do Instituto de Matemática da UFBA a obter tal título.
      </Paragrafo>
      <Paragrafo>
        Para o público leigo, a investigação de Eliza mostra como a matemática
        pura consegue traduzir desde relações humanas até às leis do universo. No
        seu mestrado, intitulado{" "}
        <strong>
          "Matrizes de permutação e leis de casamento nas sociedades primitivas"
        </strong>
        , ela aplicou a Álgebra à Antropologia: utilizou tabelas matemáticas
        (matrizes) para mapear regras de parentesco de povos tradicionais. Na
        prática, o seu estudo mostrava como calcular e prever de forma exata quais
        os clãs ou famílias que podiam casar entre si ao longo das gerações,
        garantindo a organização social e evitando a consanguinidade.
      </Paragrafo>
      <Paragrafo>
        Já no seu doutoramento, pesquisou sobre{" "}
        <strong>"Álgebras não associativas"</strong>. Na matemática que aprendemos
        na escola, a ordem em que agrupamos os fatores não altera o resultado —
        por exemplo, somar (2 + 3) + 4 é exatamente igual a 2 + (3 + 4). Porém, no
        mundo real e na ciência avançada, existem sistemas onde a sequência exata
        em que os elementos interagem muda completamente o resultado final. Eliza
        estudou justamente a estrutura lógica desses sistemas "rebeldes", que hoje
        são essenciais na física quântica, na genética (onde o cruzamento de
        características biológicas ao longo de gerações depende de cada etapa
        anterior) e na computação espacial.
      </Paragrafo>
    </>
  ),

  impacto: (
    <>
      <TituloSecao>Pioneirismo e Legado Institucional</TituloSecao>
      <Paragrafo>
        Ao retornar da França como doutora em 1977, Eliza ingressou por concurso
        como Professora Adjunta na UFBA. Durante décadas, atuou no Programa de
        Pós-Graduação em Matemática, orientando pesquisas e formando gerações de
        cientistas num ambiente académico altamente elitizado e dominado por
        homens brancos. Entre 1984 e 1988, exerceu também o cargo de{" "}
        <strong>Vice-Diretora do Instituto de Matemática e Estatística
        (IME-UFBA)</strong>, consolidando a liderança feminina nas ciências
        exatas da Bahia.
      </Paragrafo>
      <Paragrafo>
        A sua trajetória representa a quebra da chamada "tripla opressão" (gênero,
        raça e classe social), posicionando-a como uma desbravadora que superou a
        desconfiança intelectual e o racismo estrutural com excelência académica e
        autodeterminação.
      </Paragrafo>
      <Citacao>
        "Ser professora de Matemática foi meu ideal. No meu sentir, não existe
        nada melhor. Sinto-me realizada, não me vejo em outra profissão."
      </Citacao>
      <Paragrafo>
        Aposentada desde 1994, dedicou-se ao artesanato, à costura e ao cuidado da
        sua mãe até 1999. Ainda em vida, viu a sua história ganhar o merecido
        reconhecimento nacional: em 2022, a UFBA criou o{" "}
        <strong>
          Programa de Apoio a Projetos e Iniciação Científica em Matemática
          Professora Dra. Eliza Maria Ferreira Veras da Silva
        </strong>
        , voltado a incentivar a formação de estudantes negras e negros nas
        exatas.
      </Paragrafo>
      <Paragrafo>
        Eliza Maria faleceu no dia 31 de maio de 2025, aos 81 anos, deixando um
        legado inestimável que pavimentou a estrada para todas as cientistas e
        matemáticas negras do Brasil contemporâneo.
      </Paragrafo>
    </>
  ),

  curiosidades: (
    <>
      <TituloSecao>Fatos Marcantes</TituloSecao>
      <ListaCuriosidades>
        <Curiosidade numero="01">
          <strong>Marco Histórico:</strong> Ao defender a sua tese na França em
          1977, tornou-se a mulher negra com o título de doutoramento em
          Matemática mais antigo do Brasil e a primeira professora do IME-UFBA a
          alcançar o grau de doutora.
        </Curiosidade>
        <Curiosidade numero="02">
          <strong>Perfeição Académica:</strong> No ensino médio (Escola Normal),
          manteve média 10 em absolutamente todas as disciplinas durante os três
          anos do curso, feito que lhe rendeu o prémio internacional da Bolsa
          Phillips.
        </Curiosidade>
        <Curiosidade numero="03">
          <strong>Independência Firme:</strong> Quando se casou, o marido tentou
          exigir que ela abandonasse o regime de dedicação exclusiva na
          universidade; Eliza recusou prontamente, honrando o ensinamento da mãe
          de nunca abrir mão da sua independência financeira.
        </Curiosidade>
        <Curiosidade numero="04">
          <strong>Paixão pela Bahia:</strong> Fora das salas de aula e dos
          cálculos abstratos, cultivava o hábito da costura e era apaixonada pelo
          Morro de São Paulo (BA), local que conheceu aos quatro anos de idade e
          que visitou por toda a vida.
        </Curiosidade>
      </ListaCuriosidades>
    </>
  ),

  referencias: (
    <>
      <TituloSecao>Fontes e Leituras</TituloSecao>
      <ListaReferencias>
        <Referencia>
          MENEZES, Márcia Barbosa de.{" "}
          <em>
            Eliza: trajetória e estratégias de sobrevivência de uma
            outsider/within na Matemática.
          </em>{" "}
          Bolema, Rio Claro (SP), v. 37, n. 76, p. 407-426, ago. 2023[cite: 18].
        </Referencia>
        <Referencia>
          FAUSTINO, Gustavo Augusto Assis.{" "}
          <em>Eliza Maria Ferreira Veras da Silva.</em> Revista da ABPN, v. 12, n.
          33, p. 684-687, jun.-ago. 2020[cite: 38].
        </Referencia>
        <Referencia>
          PINHEIRO, Bárbara Carine Soares.{" "}
          <em>Descolonizando Saberes: Mulheres Negras na Ciência.</em> São Paulo:
          Editora Livraria da Física, 2020[cite: 41].
        </Referencia>
        <Referencia>
          MEMÓRIA FEMINISTA ANTIRRACISTA.{" "}
          <em>Eliza Maria Ferreira Veras da Silva (1944 – 2025).</em> Disponível
          em:{" "}
          <a
            href="https://memoriafeminista.com.br/eliza-maria-ferreira-veras-da-silva-1944-2025/"
            target="_blank"
            rel="noopener"
          >
            memoriafeminista.com.br
          </a>
        </Referencia>
        <Referencia>
          NEGRÊ.{" "}
          <em>
            A professora baiana Eliza Maria é a primeira matemática negra doutora
            do Brasil.
          </em>{" "}
          2025. Disponível em:{" "}
          <a
            href="https://negre.com.br/a-professora-baiana-eliza-maria-e-a-primeira-matematica-negra-doutora-do-brasil/"
            target="_blank"
            rel="noopener"
          >
            negre.com.br
          </a>
        </Referencia>
        <Referencia>
          Wikipédia. <em>Eliza Maria Ferreira Veras da Silva.</em> Disponível em:{" "}
          <a
            href="https://pt.wikipedia.org/wiki/Eliza_Maria_Ferreira_Veras_da_Silva"
            target="_blank"
            rel="noopener"
          >
            pt.wikipedia.org
          </a>
        </Referencia>
      </ListaReferencias>
    </>
  ),
};
