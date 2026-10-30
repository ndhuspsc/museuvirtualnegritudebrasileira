import type { Personalidade } from "../../types";
import {
  Paragrafo,
  Citacao,
  TituloSecao,
  Subtitulo,
  Figura,
  ListaCuriosidades,
  Curiosidade,
  ListaReferencias,
  Referencia,
} from "../../components/conteudo";

export const carolinaMaria: Personalidade = {
  nome: "Carolina Maria de Jesus",
  indexTexto:
    "Escritora, compositora e poetisa brasileira. Veja mais sobre a vida e obra da primeira mulher negra e favelada best-seller nos Estados Unidos. ",
  fotoBanner: "/Assets/CarolinaMaria/fundo.jpg",
  fotoPerfil: "/Assets/CarolinaMaria/carolina_maria.png",
  artistaLink: "https://www.instagram.com/al.umbramento",
  artistaArroba: "@al.umbramento",

  origem: (
    <>
      <Paragrafo>
        Carolina nasceu em 14 de março de 1914, em uma comunidade rural no
        município de Sacramento, interior de Minas Gerais. Vinda de uma família
        humilde que trabalhava na lavoura e migrava constantemente pela região,
        teve pouca oportunidade de estudar. Aos sete anos, foi matriculada no
        Colégio Allan Kardec, onde frequentou a escola por apenas dois anos de
        educação básica — tempo suficiente para aprender a ler, escrever e
        desenvolver uma paixão avassaladora pelos livros.
      </Paragrafo>
      <Paragrafo>
        Em 1937, após a morte de sua mãe, migrou para a capital paulista.
        Trabalhou como empregada doméstica na casa do renomado cardiologista
        Euryclides de Jesus Zerbini, onde lia os livros da biblioteca nos dias
        de folga. Em 1947, ao engravidar do primeiro filho (João José), perdeu o
        emprego e mudou-se para a favela do Canindé. Lá, construiu o próprio
        barraco com tábuas, latas e papelão, tendo posteriormente mais dois
        filhos: José Carlos (1950) e Vera Eunice (1953
      </Paragrafo>
      <Citacao>
        "A favela é o quarto de despejo de uma cidade. Nós, os pobres, somos os
        trastes velhos."
      </Citacao>
      <Paragrafo>
        Carolina nunca quis se casar para não se submeter à dominação masculina.
        Ela afirmava expressamente que escrevia porque o sofrimento e a fome a
        obrigavam a buscar um refúgio.
      </Paragrafo>
      <Paragrafo>
        Em 1955, começou a registrar o cotidiano da favela nos cadernos que
        encontrava no lixo. Foi nessa vivência que registrou observações
        contundentes, afirmando em 1958 que "a escravatura atual é a fome e sua
        cor é amarela", pois a falta de alimento ataca a dignidade humana antes
        mesmo do físico
      </Paragrafo>
      <Paragrafo>
        Escrevendo diariamente em cadernos resgatados do lixo, transformou sua
        vivência no livro Quarto de Despejo: Diário de uma Favelada (1960). A
        obra tornou-se um best-seller instantâneo, traduzido para mais de 13
        idiomas e distribuído em cerca de 40 países.
      </Paragrafo>
      <Paragrafo>
        Autora de prosa, poesia, composições musicais e peças de teatro,
        Carolina permanece como um símbolo de denúncia social, força poética e
        resistência política
      </Paragrafo>
    </>
  ),

  feitos: (
    <>
      <Subtitulo>A Descoberta e o Best-seller Mundial</Subtitulo>
      <Paragrafo>
        A virada em sua trajetória aconteceu em 1958, quando o repórter Audálio
        Dantas visitou a favela do Canindé para fazer uma reportagem e conheceu
        Carolina. Ao ler seus cadernos repletos de registros poéticos e cruéis
        sobre a miséria, o jornalista percebeu que a verdadeira história daquele
        lugar estava ali, escrita por quem a vivia.
      </Paragrafo>
      <Paragrafo>
        Isso culminou na publicação, em agosto de 1960, de seu primeiro e mais
        famoso livro: <strong>"Quarto de Despejo: Diário de uma Favelada"</strong>
        . O sucesso foi estrondoso: a obra vendeu cerca de 10 mil exemplares em
        apenas uma semana, denunciou a realidade social e política do Brasil de
        forma sem precedentes e foi traduzida para mais de 13 idiomas, sendo
        distribuída em mais de 40 países.
      </Paragrafo>
      <Figura
        src="/Assets/CarolinaMaria/carolina_livro.jpg"
        alt="Carolina Maria de Jesus autografando seu livro"
        legenda={
          <i>
            Carolina Maria de Jesus, que se tornou um fenômeno editorial no
            Brasil e no mundo. Acervo IMS.
          </i>
        }
      />
      <Paragrafo>
        Com os ganhos do livro, Carolina conseguiu deixar a favela e mudar-se
        para o bairro de Santana, experiência marcada por preconceitos da elite
        e novas perspectivas de vida, relatados em{" "}
        <strong> "Casa de Alvenaria" </strong> (1961). Uma artista múltipla, ela
        não se limitou aos diários: escreveu romances (como "O Escravo" —
        publicado em 2023, postumamente, pela <i>Companhia das Letras</i>, como
        parte de um projeto de publicar toda obra de Carolina ), poemas, contos,
        peças de teatro e provérbios. Em 1961, também gravou o disco de vinil{" "}
        <strong>"Quarto de Despejo"</strong>, onde cantou sambas e marchas de sua
        própria autoria.
      </Paragrafo>
    </>
  ),

  impacto: (
    <>
      <TituloSecao>
        Transcrição da realidade brasileira — Carolina e a favela.
      </TituloSecao>
      <Paragrafo>
        Com o passar dos anos, o encanto da mídia e do mercado editorial
        tradicional diminuiu, e Carolina enfrentou o ostracismo e novas
        dificuldades financeiras, mudando-se para um sítio em Parelheiros (SP),
        onde continuou escrevendo até o fim de sua vida. Ela faleceu em 13 de
        fevereiro de 1977, vítima de insuficiência respiratória.
      </Paragrafo>
      <Paragrafo>
        Seu legado permaneceu vivo na memória popular, e a partir da década de
        1990 sua obra passou por uma massiva revalorização. Carolina Maria de
        Jesus é hoje reconhecida como uma intérprete imprescindível para a
        compreensão do país e um símbolo de luta, rompendo o estigma de
        "escritora favelada" para ocupar seu lugar no cânone da literatura
        nacional.
      </Paragrafo>
      <Citacao>"A cor da fome é amarela."</Citacao>
      <Paragrafo>
        Em 2021, a Universidade Federal do Rio de Janeiro (UFRJ) concedeu-lhe
        postumamente o título de <strong>Doutora Honoris Causa</strong>,
        corrigindo um silenciamento histórico do meio acadêmico. Nos últimos
        anos, ela tem sido celebrada em mostras de grande porte, como a exposição
        "Um Brasil para os brasileiros", do Instituto Moreira Salles.
      </Paragrafo>
      <Paragrafo>
        O reconhecimento máximo do Estado brasileiro avançou em novembro de 2024,
        quando a Câmara dos Deputados aprovou a inscrição do nome de Carolina no{" "}
        <strong>Livro dos Heróis e Heroínas da Pátria</strong>, cravando sua
        importância definitiva na formação da consciência crítica do povo
        brasileiro.
      </Paragrafo>
    </>
  ),

  curiosidades: (
    <>
      <TituloSecao>Fatos Marcantes</TituloSecao>
      <ListaCuriosidades>
        <Curiosidade numero="01">
          <strong>Multiartista:</strong> Carolina não foi apenas diarista. Ela
          compunha canções e, em 1961, gravou um raro e valioso LP (disco)
          cantando suas próprias composições musicais.
        </Curiosidade>
        <Curiosidade numero="02">
          <strong>Sucesso Global:</strong> "Quarto de Despejo" quebrou barreiras
          e foi traduzido para línguas como inglês, francês, japonês, russo e
          tcheco, sendo lido no mundo inteiro.
        </Curiosidade>
        <Curiosidade numero="03">
          <strong>Estilo Único:</strong> A escrita de Carolina misturava a
          linguagem da rua com palavras rebuscadas que ela aprendia lendo
          dicionários antigos achados no lixo, criando uma identidade
          inconfundível.
        </Curiosidade>
        <Curiosidade numero="04">
          <strong>Monumento:</strong> Em Parelheiros, bairro da zona sul de São
          Paulo onde a autora viveu seus últimos dias, há uma escultura em sua
          homenagem na Praça Júlio César de Campos.
        </Curiosidade>
      </ListaCuriosidades>
    </>
  ),

  referencias: (
    <>
      <TituloSecao>Fontes e Leituras</TituloSecao>
      <ListaReferencias>
        <Referencia>
          JESUS, Carolina Maria de.{" "}
          <em>Quarto de despejo: diário de uma favelada.</em> São Paulo: Ática
          (Edição Comemorativa).
        </Referencia>
        <Referencia>
          FARIAS, Tom. <em>Carolina: Uma Biografia.</em> Rio de Janeiro: Malê,
          2018.
        </Referencia>
        <Referencia>
          INSTITUTO MOREIRA SALLES (IMS).{" "}
          <em>Exposição Carolina Maria de Jesus: um Brasil para os brasileiros.</em>{" "}
          (2021-2023).
        </Referencia>
        <Referencia>
          MEIHY, José Carlos S. B.; LEVINE, Robert M.{" "}
          <em>Cinderela negra: a saga de Carolina Maria de Jesus.</em> Rio de
          Janeiro: UFRJ, 1994.
        </Referencia>
        <Referencia>
          PERPÉTUA, Elzira Divina.{" "}
          <em>A vida escrita de Carolina Maria de Jesus.</em> Belo Horizonte:
          Nandyala, 2014.
        </Referencia>
        <Referencia>
          PORTAL LITERAФRO (UFMG). <em>Carolina Maria de Jesus.</em> Disponível
          em:{" "}
          <a
            href="https://www.letras.ufmg.br/literafro"
            target="_blank"
            rel="noopener"
          >
            letras.ufmg.br/literafro
          </a>
        </Referencia>
      </ListaReferencias>
    </>
  ),
};
