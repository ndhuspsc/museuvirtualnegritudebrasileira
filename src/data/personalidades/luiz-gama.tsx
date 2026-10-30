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

export const luizGama: Personalidade = {
  destaque: false,
  nome: "Luiz Gama",
  indexTexto:
    "O advogado autodidata que desafiou o império e libertou centenas de escravizados.",
  fotoBanner: "/Assets/LuizGama/fundo.png",
  fotoPerfil: "/Assets/LuizGama/luiz_gama.png",
  artistaLink: "https://www.instagram.com/al.umbramento",
  artistaArroba: "@al.umbramento",

  origem: (
    <>
      <Paragrafo>
        Luís Gonzaga Pinto da Gama nasceu livre no dia 21 de junho de 1830, na
        cidade de Salvador, província da Bahia. Ele era filho de Luíza Mahin,
        mulher negra, africana livre vinda da Costa da Mina, que se sustentava
        fazendo e vendendo quitandas, e de um fidalgo português cujo nome ele
        nunca revelou. Luísa Mahin envolveu-se em movimentos de resistência
        negra na Bahia, como a Revolta dos Malês e a Sabinada, e por isso teria
        sido obrigada a deixar a cidade, ficando o filho aos cuidados do pai.{" "}
      </Paragrafo>
      <Paragrafo>
        O pai de Gama vivia de uma herança recebida em 1838, mas dois anos
        depois já se encontrava em situação de extrema pobreza, viciado em jogos
        de cartas.Em novembro de 1840, <strong>aos 10 anos de idade</strong>,
        Luiz foi levado pelo próprio pai a bordo de um navio e vendido como
        escravo, num ato que marcaria toda a sua trajetória de vida.{" "}
      </Paragrafo>
      <Citacao>
        "O escravo que mata o senhor, em qualquer circunstância, mata sempre em
        legítima defesa."
      </Citacao>
      <Paragrafo>
        Foi levado para o Rio de Janeiro e depois revendido a um fazendeiro da
        região de Lorena chamado Antônio Pereira Cardoso, no interior de São
        Paulo, onde permaneceu cativo e analfabeto durante toda a infância e
        adolescência. Foi o estudante Anônio Rodrigues do Prado Junior que
        hospedado na mesma casa quem ensinou Luiz, já com cerca de 17 anos, a ler
        e escrever.{" "}
      </Paragrafo>
      <Paragrafo>
        Em 1848,
        <i>
          {" "}
          "havendo obtido de forma ardilosa e secretamente provas inconcussas de
          sua liberade"
        </i>
        , segundo seu proprio relato, foge da casa de Cardoso para a capital
        paulista, onde viveria pelos quarenta e dois anos seguintes, tornando-se
        um de seus cidadãos mais ilustres. Alistou-se na Força Pública e, mais
        tarde, conseguiu trabalho como amanuense e praticante de Direito na
        Secretaria de Polícia da província, ambiente que lhe deu acesso direto
        às leis e aos processos judiciais.{" "}
      </Paragrafo>
      <Paragrafo>
        Embora nunca tenha cursado a Faculdade de Direito do Largo de São
        Francisco de forma regular — não podia, por ser negro e sem diploma —,
        Gama frequentou as aulas como ouvinte e absorveu o conhecimento jurídico
        que usaria, dali em diante, para combater a escravidão dentro dos
        próprios tribunais do Império.{" "}
      </Paragrafo>
    </>
  ),

  feitos: (
    <>
      <Subtitulo>Direito, Jornalismo e Literatura</Subtitulo>
      <Paragrafo>
        Como advogado — ainda que "provisionado", sem diploma formal — Gama
        dedicou-se a defender, gratuitamente, escravizados que buscavam sua
        liberdade nos tribunais. Ao longo de sua carreira, conseguiu a
        libertação de mais de <strong>500 pessoas</strong> por meio de ações
        judiciais e administrativas, um feito sem precedentes na história das
        Américas. Ele dominava todas as áreas do Direito e adaptava seus
        argumentos ao perfil de cada juiz: usava fundamentação eclesiástica
        diante de magistrados católicos, o vocabulário iluminista francês diante
        de maçons, e interpretação jurídica restrita diante dos mais técnicos.
      </Paragrafo>
      <Paragrafo>
        Seu caso mais célebre ocorreu entre 1870 e 1872, na comarca de Santos: ao
        defender um grupo de pessoas escravizadas que haviam sido declaradas
        livres em testamento, Gama venceu na primeira e na segunda instâncias,
        conquistando a liberdade de <strong>217 cativos</strong> de uma só vez —
        a maior ação coletiva de libertação já registrada nas Américas.
      </Paragrafo>
      <Figura
        src="/Assets/LuizGama/luizgama.png"
        alt="Luiz Gama, por volta de 1880"
        legenda="Luiz Gama, em fotografia de cerca de 1880. Acervo Wikimedia Commons."
      />
      <Paragrafo>
        Paralelamente ao Direito, Gama foi um dos fundadores da imprensa
        humorística e satírica de São Paulo. Em 1864, junto ao caricaturista
        Ângelo Agostini, fundou o jornal ilustrado <strong>Diabo Coxo</strong>,
        recorrendo a charges para que mesmo os iletrados compreendessem os
        debates políticos e sociais da época. Colaborou ainda com os periódicos{" "}
        <strong>O Cabrião</strong> e <strong>O Polichinelo</strong>, e em 1869
        fundou, com Rui Barbosa, o <strong>Correio Paulistano</strong>, primeiro
        jornal diário da capital paulista.
      </Paragrafo>
      <Paragrafo>
        Como escritor, publicou em 1859 seu único livro,{" "}
        <strong>Primeiras Trovas Burlescas de Getulino</strong> — coletânea de
        versos satíricos sob o pseudônimo "Getulino" — no qual ironizava a
        aristocracia escravocrata e afirmava com orgulho sua negritude. É dele o
        poema "Quem Sou Eu?", também chamado de "Bodarrada", resposta irônica ao
        apelido racista de "bode" que tentavam lhe impor.
      </Paragrafo>
      <Paragrafo>
        Gama foi também um defensor pioneiro da causa republicana, participando
        da fundação do Partido Republicano Paulista em 1873, embora dele tenha se
        afastado quase imediatamente ao perceber que o espaço era dominado por
        fazendeiros e senhores de escravos. Sua militância era simultânea: contra
        a Monarquia e contra o cativeiro, que para ele eram a mesma luta.
      </Paragrafo>
    </>
  ),

  impacto: (
    <>
      <TituloSecao>Patrono da Abolição</TituloSecao>
      <Paragrafo>
        Luiz Gama faleceu em São Paulo, em 24 de agosto de 1882, vítima de
        diabetes, aos 52 anos — seis anos antes da assinatura da Lei Áurea, que
        ele tanto lutou para antecipar. Seu funeral reuniu uma multidão tão
        grande que o cortejo, segundo relatos da época, teve de ser conduzido a
        pé pelas ruas da cidade, carregado por amigos e admiradores que não
        permitiram que a carruagem funerária o levasse sozinho.
      </Paragrafo>
      <Paragrafo>
        O legado de Gama permaneceu, por muito tempo, apagado ou minimizado pela
        historiografia oficial. Apenas <strong>133 anos após sua morte</strong>,
        em 2015, a Ordem dos Advogados do Brasil (OAB-SP) concedeu-lhe
        postumamente o título oficial de advogado, reconhecendo o que ele já
        havia provado na prática havia mais de um século. Em 2018, pela Lei
        13.629/2018, foi declarado oficialmente{" "}
        <strong>Patrono da Abolição da Escravidão no Brasil</strong>.
      </Paragrafo>
      <Citacao>
        "Em nós até a cor é um defeito, um vício imperdoável de origem... mas esta
        cor encerra vulcões, onde arde o fogo sagrado da liberdade."
      </Citacao>
      <Paragrafo>
        A trajetória de Gama — de criança livre vendida ilegalmente como escrava
        a advogado que libertou centenas de pessoas usando as próprias leis do
        Império contra seus autores — segue como referência central nos debates
        sobre racismo estrutural, reparação histórica e acesso à Justiça no
        Brasil contemporâneo. Foi o único entre os grandes nomes do abolicionismo
        brasileiro a ter vivido, ele mesmo, a experiência do cativeiro.
      </Paragrafo>
      <Paragrafo>
        Em 2021, a Universidade de São Paulo concedeu-lhe, postumamente, o título
        de Doutor Honoris Causa — sendo Gama o primeiro brasileiro negro a
        recebê-lo da instituição.
      </Paragrafo>
      <Paragrafo>
        Hoje, ruas, escolas, institutos e até uma loja maçônica levam o nome de
        Luiz Gama por todo o país. Em 2023, o Governo Federal instituiu o{" "}
        <strong>Prêmio Luiz Gama</strong>, destinado a reconhecer pessoas e
        instituições jurídicas que contribuam para a defesa dos direitos humanos
        — perpetuando, mais de um século depois, a mesma luta que ele travou
        sozinho nos tribunais do Império.
      </Paragrafo>
    </>
  ),

  curiosidades: (
    <>
      <TituloSecao>Fatos Marcantes</TituloSecao>
      <ListaCuriosidades>
        <Curiosidade numero="01">
          Luiz Gama foi o{" "}
          <strong>único abolicionista negro do Brasil</strong> a ter vivido, ele
          mesmo, a experiência da escravidão — vendido pelo próprio pai aos 10
          anos de idade.
        </Curiosidade>
        <Curiosidade numero="02">
          Sua mãe, Luísa Mahin, foi uma importante líder de resistência negra na
          Bahia, envolvida em revoltas como a dos Malês — uma herança de luta que
          o próprio Gama carregaria por toda a vida.
        </Curiosidade>
        <Curiosidade numero="03">
          Mesmo nunca tendo se formado oficialmente em Direito, Gama atuou como
          advogado "provisionado" e só recebeu o título oficial da OAB-SP{" "}
          <strong>133 anos depois de sua morte</strong>, em 2015.
        </Curiosidade>
        <Curiosidade numero="04">
          Publicou poesia satírica sob pseudônimos como <strong>Getulino</strong>
          , <strong>Afro</strong> e <strong>Barrabás</strong>, usando o humor
          como arma contra o racismo e a hipocrisia da elite imperial.
        </Curiosidade>
      </ListaCuriosidades>
    </>
  ),

  referencias: (
    <>
      <TituloSecao>Fontes e Leituras</TituloSecao>
      <ListaReferencias>
        <Referencia>
          LIMA, Bruno Rodrigues de.{" "}
          <em>
            Luiz Gama contra o Império: A luta pelo direito no Brasil da
            Escravidão.
          </em>{" "}
          São Paulo: Editora Contracorrente, 2024.
        </Referencia>
        <Referencia>
          FERREIRA, Ligia Fonseca.{" "}
          <em>Com a palavra Luiz Gama. Poemas, artigos, cartas, máximas.</em> São
          Paulo: Imprensa Oficial, 2011.
        </Referencia>
        <Referencia>
          FERREIRA, Lígia Fonseca (Org.).{" "}
          <em>
            Lições de resistência: artigos de Luiz Gama na imprensa de São Paulo
            e do Rio de Janeiro.
          </em>{" "}
          São Paulo: Edições SESC, 2020.
        </Referencia>
        <Referencia>
          SANTOS, Luiz Carlos. <em>Luiz Gama.</em> Selo Negro Edições, 2014.
        </Referencia>
        <Referencia>
          GAMA, Luiz. <em>Primeiras trovas burlescas de Getulino.</em> 1859.
        </Referencia>
        <Referencia>
          AZEVEDO, Elciene.{" "}
          <em>
            Orfeu de Carapinha: a trajetória de Luiz Gama na imperial cidade de
            São Paulo.
          </em>{" "}
          São Paulo: Editora da Unicamp, 1999.
        </Referencia>
        <Referencia>
          ALVES, Isabela.{" "}
          <em>
            Luiz Gama: conheça a história do maior abolicionista do Brasil.
          </em>{" "}
          Politize!, 2022.
        </Referencia>
        <Referencia>
          Wikipédia. <em>Luiz Gama.</em> Disponível em:{" "}
          <a
            href="https://pt.wikipedia.org/wiki/Luiz_Gama"
            target="_blank"
            rel="noopener"
          >
            pt.wikipedia.org/wiki/Luiz_Gama
          </a>
        </Referencia>
      </ListaReferencias>
    </>
  ),
};
