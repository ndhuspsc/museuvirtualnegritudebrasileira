import type { Personalidade } from "../../types";
import {
  Paragrafo,
  Citacao,
  Subtitulo,
  TituloSecao,
  Figura,
  ListaCuriosidades,
  Curiosidade,
  ListaReferencias,
  Referencia,
} from "../../components/conteudo";

export const abdiasNascimento: Personalidade = {
  destaque: false,
  nome: "Abdias Nascimento",
  indexTexto:
    "O teatro, a política e a arte como ferramentas de resistência e emancipação.",
  fotoBanner: "/Assets/Abdias/os doadores da tecnologia.png",
  fotoPerfil: "/Assets/Abdias/abdias.png",
  artistaLink: "https://www.instagram.com/zeitouniarts",
  artistaArroba: "@zeitouniarts",

  origem: (
    <>
      <Paragrafo>
        Abdias Nascimento nasceu em 14 de março de 1914, na cidade de Franca,
        interior de São Paulo. Filho de Seu Bem-Bem, sapateiro e músico, e Dona
        Josina, doceira e ama de leite, Abdias cresceu em meio a grandes
        dificuldades financeiras, desigualdade racial e social, o que moldaria
        sua visão política e artística ao longo da vida.
      </Paragrafo>
      <Paragrafo>
        Desde cedo, precisou trabalhar entregando carne e leite de madrugada e
        limpando farmácias à tarde, vivenciando o preconceito racial logo nos
        primeiros anos de escola
      </Paragrafo>
      <Paragrafo>
        Aos 15 anos, mudou-se para a capital paulista e alistou-se no Exército,
        participando ativamente das Revoluções de 1930 e 1932. Na juventude,
        integrou o grupo de poetas Santa Hermandad de la Orquídea, com o qual
        viajou pela América do Sul. Foi durante essa viagem, na cidade de Lima,
        no Peru, que Abdias assistiu à peça O Imperador Jones, do norte-americano
        Eugene O'Neill.{" "}
      </Paragrafo>
      <Citacao>
        "Não há democracia racial sem igualdade econômica, social e cultural."
      </Citacao>
      <Paragrafo>
        Ao ver o protagonista negro sendo interpretado por um ator branco com o
        rosto pintado de preto (prática conhecida como blackface), ele sentiu um
        "fogo anunciador" e decidiu ali mesmo que voltaria ao Brasil para fundar
        um teatro negro. Antes de concretizar esse sonho, ele estudou teatro na
        Argentina e, de volta ao Brasil, chegou a ser preso por motivos políticos
        no Carandiru (Penitenciária do Estado de São Paulo), onde transformou o
        cárcere em arte ao criar o Teatro do Sentenciado, um projeto em que os
        próprios detentos escreviam, atuavam e construíam os cenários
      </Paragrafo>
      <Paragrafo>
        Desde jovem, Abdias demonstrou aptidão para as artes e interesse pela
        política. Estudou Economia na Faculdade de Ciências Econômicas de São
        Paulo e, paralelamente, engajou-se no movimento negro brasileiro ainda em
        sua juventude, quando as organizações de resistência negra começavam a se
        consolidar no país.
      </Paragrafo>
      <Paragrafo>
        Sua trajetória inicial foi marcada por episódios de discriminação e
        resistência. Ainda jovem, foi preso por defender a dignidade de uma
        mulher negra em uma briga de rua — um gesto que sintetizava o caráter
        combativo que definiria toda a sua vida.
      </Paragrafo>
    </>
  ),

  feitos: (
    <>
      <Subtitulo>Teatro, Política, Literatura e Artes Plásticas</Subtitulo>
      <Paragrafo>
        Livre da prisão, Abdias fundou no Rio de Janeiro, em 1944, o histórico{" "}
        <strong> Experimental do Negro (TEN)</strong>. O TEN não era apenas um
        grupo teatral: era um espaço de alfabetização e conscientização para
        empregadas domésticas e operários. Em 1945, o grupo fez história ao
        estrear O Imperador Jones no palco do prestigiado Theatro Municipal do
        Rio de Janeiro, rompendo a barreira racial da época
      </Paragrafo>
      <Paragrafo>
        O TEN também foi responsável pela criação do Jornal Quilombo (1948) e
        pela organização do 1º Congresso do Negro Brasileiro (1950)
      </Paragrafo>
      <Figura
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Teatro_Experimental_do_Negro_ensaiando_Sortil%C3%A9gio%2C_com_Abdias_do_Nascimento%2C_com_L%C3%A9a_Garcia.tif/lossy-page1-960px-Teatro_Experimental_do_Negro_ensaiando_Sortil%C3%A9gio%2C_com_Abdias_do_Nascimento%2C_com_L%C3%A9a_Garcia.tif.jpg"
        alt="Teatro Experimental do Negro"
        legenda=" Experimental do Negro ensaiando Sortilégio, com Abdias Nascimento e Léa Garcia, 1957. Arquivo Nacional."
        ocultarSeErro
      />
      <Paragrafo>
        Como escritor e dramaturgo, sua peça mais emblemática, Sortilégio
        (mistério negro), enfrentou sete anos de censura antes de estrear em
        1957. Escreveu livros fundamentais, como O Genocídio do Negro Brasileiro
        (1978) e O Quilombismo (1980). Durante a ditadura militar promulgada pelo
        AI-5 em 1968, foi forçado ao exílio. Bloqueado inicialmente pela barreira
        da língua inglesa nos Estados Unidos, Abdias descobriu nas artes plásticas
        a sua maior voz
      </Paragrafo>
      <Paragrafo>
        Pintando telas vibrantes que resgatavam orixás, hieróglifos egípcios e
        ideogramas adinkra da África Ocidental, ele expôs em museus ao redor do
        mundo. Uma de suas obras mais impactantes e polêmicas foi Xangô
        crucificado ou o martírio de Malcolm X, que fundia o ativista
        afro-americano com o orixá da justiça
      </Paragrafo>
      <Paragrafo>
        Ainda no exílio, lecionou como professor titular nas universidades de
        Yale, Wesleyan, SUNY Buffalo (nos EUA) e na Universidade de Ifé (na
        Nigéria)
      </Paragrafo>
      <Paragrafo>
        De volta ao Brasil, fundou o IPEAFRO (1981) e entrou para a política
        institucional
      </Paragrafo>
      <Paragrafo>
        Sua atuação parlamentar foi igualmente marcante. Como Deputado Federal
        (1983-1987) — foi o primeiro parlamentar a propor projetos de lei de
        ações afirmativas (cotas) e a tipificação do racismo como crime de
        lesa-humanidade — e, mais tarde, Senador pelo Rio de Janeiro, Abdias
        apresentou projetos pioneiros de ações afirmativas. Além disso, foi
        indicado ao Prêmio Nobel da Paz por seu trabalho em defesa dos direitos
        humanos.
      </Paragrafo>
    </>
  ),

  impacto: (
    <>
      <TituloSecao>Uma Chama Que Ainda Arde</TituloSecao>
      <Paragrafo>
        O Fim da Vida e um Legado Que Não Se Apaga Abdias Nascimento faleceu no
        Rio de Janeiro em 23 de maio de 2011, aos 97 anos. Cumprindo seu último
        desejo, em novembro daquele ano, suas cinzas foram depositadas no solo
        sagrado da Serra da Barriga, em Alagoas, local onde existiu a República
        do Quilombo dos Palmares.
      </Paragrafo>
      <Paragrafo>
        O pensamento e a obra de Abdias Nascimento continuam profundamente
        atuais. A luta que ele protagonizou décadas atrás ecoa nas políticas de
        cotas raciais nas universidades públicas brasileiras, nas discussões
        sobre reparação histórica e na crescente valorização da cultura
        afro-brasileira no espaço público. A criação do{" "}
        <strong>Dia Nacional da Consciência Negra</strong> (20 de novembro),
        proposta por ele na Câmara em 1983, consolidou-se em todo o país
      </Paragrafo>
      <Citacao>
        "O quilombo não é um fenômeno do passado. É uma prática de resistência
        permanente do povo negro."
      </Citacao>
      <Paragrafo>
        O conceito de <strong>Quilombismo</strong> — elaborado por Abdias como
        uma filosofia política e cultural baseada nas experiências coletivas de
        resistência dos povos africanos no Brasil — tornou-se referência central
        nos estudos de relações raciais e movimentos negros ao redor do mundo.
      </Paragrafo>
      <Paragrafo>
        Pela magnitude de sua obra intelectual e ativista, em 2010 ele foi
        indicado oficialmente ao Prêmio Nobel da Paz. Em 2024, foi declarado
        Herói Nacional do Brasil
      </Paragrafo>
      <Paragrafo>
        Institutos, museus, escolas e centros culturais que carregam seu nome em
        todo o Brasil são testemunho vivo da permanência de seu legado. A lei
        federal n.º 12.990/2014, que reserva vagas para negros em concursos
        públicos federais, guarda traços diretos dos projetos que ele apresentou
        décadas antes.
      </Paragrafo>
    </>
  ),

  curiosidades: (
    <>
      <TituloSecao>O Que Poucos Sabem</TituloSecao>
      <ListaCuriosidades>
        <Curiosidade numero="01">
          Na juventude, Abdias e seu amigo Rodrigues Alves foram barrados de
          dançar no cabaré Danúbio Azul, em São Paulo, por serem negros.
        </Curiosidade>
        <Curiosidade numero="02">
          Nos anos 1930, Abdias chegou a integrar a Ação Integralista
          Brasileira, atraído unicamente pelo discurso anti-imperialista e
          nacionalista do grupo. No entanto, ao constatar o profundo racismo
          estrutural da organização, desligou-se definitivamente do movimento e
          passou a condenar publicamente o fascismo
        </Curiosidade>
        <Curiosidade numero="03">
          Ele foi um dos fundadores do <strong>IPEAFRO</strong> (Instituto de
          Pesquisas e Estudos Afro-Brasileiros), que até hoje produz conhecimento
          sobre a história e cultura negra no Brasil.
        </Curiosidade>
      </ListaCuriosidades>
    </>
  ),

  referencias: (
    <>
      <TituloSecao>Fontes e Leituras</TituloSecao>
      <ListaReferencias>
        <Referencia>
          NASCIMENTO, Abdias do. <em>O Quilombismo.</em> Petrópolis: Vozes, 1980.
        </Referencia>
        <Referencia>
          NASCIMENTO, Abdias do. <em>O Genocídio do Negro Brasileiro.</em> Rio de
          Janeiro: Paz e Terra, 1978.
        </Referencia>
        <Referencia>
          SEMOG, Éle; NASCIMENTO, Abdias.{" "}
          <em>Abdias Nascimento: o griot e as muralhas.</em> Rio de Janeiro:
          Pallas, 2006.
        </Referencia>
        <Referencia>
          IPEAFRO – Instituto de Pesquisas e Estudos Afro-Brasileiros. Disponível
          em:{" "}
          <a href="https://ipeafro.org.br" target="_blank" rel="noopener">
            ipeafro.org.br
          </a>
        </Referencia>
        <Referencia>
          Enciclopédia Itaú Cultural. <em>Abdias Nascimento.</em> Disponível em:{" "}
          <a
            href="https://enciclopedia.itaucultural.org.br"
            target="_blank"
            rel="noopener"
          >
            enciclopedia.itaucultural.org.br
          </a>
        </Referencia>
        <Referencia>
          Universidade de São Paulo – Núcleo de Direitos Humanos, São Carlos.
        </Referencia>
      </ListaReferencias>
    </>
  ),
};
