import type { Personalidade } from "../../types";
import {
  Paragrafo,
  Subtitulo,
  TituloSecao,
  ListaCuriosidades,
  Curiosidade,
  ListaReferencias,
  Referencia,
} from "../../components/conteudo";

export const emicida: Personalidade = {
  nome: "Leandro Roque de Oliveira (Emicida)",
  indexTexto:
    "Letrista, compositor e cantor paulistano que revolucionou o hip-hop nacional, uniu o rap ao samba, à MPB e ao gospel e se tornou um dos intelectuais públicos mais influentes do Brasil.",
  // TODO: ajustar os caminhos das imagens e o link do artista
  fotoBanner: "/Assets/Emicida/fundo.jpg",
  fotoPerfil: "/Assets/Emicida/Emicida.png",
  artistaLink: "https://www.instagram.com/al.umbramento",
  artistaArroba: "@al.umbramento",

  resumo: [
    <>
      Letrista, compositor e cantor nascido em{" "}
      <strong>São Paulo</strong> em 1985, considerado um dos maiores de sua
      geração.
    </>,
    <>
      Criado no Jardim Cachoeira, na zona norte da capital, e educado pela mãe,{" "}
      <strong>Dona Jacira</strong>, após a perda do pai na infância.
    </>,
    <>
      Ganhou notoriedade nas <strong>batalhas de rima</strong> paulistanas e
      alcançou o reconhecimento nacional com o single "Triunfo" (2008).
    </>,
    <>
      Fundou o <strong>Laboratório Fantasma</strong> com o irmão Evandro Fióti e
      lançou o álbum <strong>AmarElo</strong> (2019), vencedor do Grammy Latino.
    </>,
    <>
      Atua como <strong>intelectual público</strong>, com projetos na educação e
      na valorização da estética afro-brasileira.
    </>,
  ],

  origem: (
    <>
      <Paragrafo className="fs-5">
        Leandro Roque de Oliveira, conhecido como Emicida, nasceu em São Paulo em
        17 de agosto de 1985 e consolidou-se como um dos maiores letristas,
        compositores e cantores de sua geração. Criado no bairro Jardim Cachoeira,
        na zona norte da capital paulista, enfrentou ainda na infância a perda
        trágica de seu pai, assassinado ao tentar apartar uma briga quando o artista
        tinha apenas seis anos.
      </Paragrafo>
      <Paragrafo className="mt-3">
        A partir de então, foi criado por sua mãe, Dona Jacira, que sustentou
        sozinha ele, seu irmão e suas duas irmãs, tornando-se uma das maiores
        inspirações e pilares de sua trajetória pessoal e artística.
      </Paragrafo>
      <Paragrafo className="mt-3">
        Considerado revolucionário no cenário do hip-hop nacional, Emicida deu seus
        primeiros passos na música nas disputadas batalhas de rima em São Paulo,
        onde rapidamente ganhou notoriedade pela agilidade no improviso e pela
        profundidade de suas letras, vencendo dezenas de competições. O grande salto
        para o reconhecimento nacional aconteceu em 2008, com o lançamento do single
        independente "Triunfo", cujo videoclipe conquistou milhões de visualizações
        no YouTube e abriu definitivamente as portas da mídia e da indústria
        fonográfica para o rapper.
      </Paragrafo>
    </>
  ),

  feitos: (
    <>
      <Subtitulo>Da batalha de rimas ao Grammy Latino</Subtitulo>
      <Paragrafo>
        Emicida consolidou-se como um dos artistas mais influentes da música
        brasileira contemporânea ao transformar o cenário do rap nacional. Depois de
        ganhar destaque vencendo dezenas de batalhas de improviso em São Paulo, o
        cantor rompeu barreiras históricas ao unir o hip-hop ao samba, à MPB e ao
        gospel, firmando parcerias com ícones como Caetano Veloso, Gilberto Gil e
        Zeca Pagodinho. O ápice dessa trajetória musical veio com o aclamado álbum{" "}
        <strong>AmarElo (2019)</strong>, vencedor do Grammy Latino.
      </Paragrafo>
      <Paragrafo className="mt-3">
        Para além dos palcos, Emicida destacou-se pelo empreendedorismo criativo e
        pela gestão independente ao fundar, ao lado de seu irmão, Evandro Fióti, o{" "}
        <strong>Laboratório Fantasma</strong>. Criada em 2009, a empresa evoluiu de
        um selo independente para um importante hub de entretenimento, música e
        gestão de carreiras, abrindo portas para diversos artistas periféricos.
      </Paragrafo>
      <Paragrafo className="mt-3">
        O impacto do artista estende-se ainda ao audiovisual, à literatura e à
        educação, consolidando seu papel como pensador e ativista cultural. Seu
        documentário na Netflix, <em>AmarElo - É Tudo Pra Ontem</em>, recebeu uma
        indicação ao Emmy Internacional, enquanto seus livros infantis, como o
        best-seller <em>Amoras</em>, tornaram-se ferramentas essenciais de
        autoestima e letramento racial nas escolas. Reconhecido também na academia,
        como artista residente na Universidade de Coimbra, utiliza sua obra para
        resgatar figuras históricas negras invisibilizadas e democratizar debates
        filosóficos e sociais no Brasil.
      </Paragrafo>
    </>
  ),

  impacto: (
    <>
      <TituloSecao>Impactos nos Dias Atuais</TituloSecao>
      <Paragrafo>
        Atualmente, Emicida atua não apenas como músico, mas como um importante
        intelectual público e articulador cultural no Brasil. Na música, destaca-se
        por conectar gerações e preservar a memória negra, como no projeto{" "}
        <strong>Emicida Racional VL2, Mesmas Cores & Mesmos Valores</strong>, em
        homenagem aos Racionais MC's, além de dar visibilidade às mulheres do rap
        nacional e propor uma escuta mais reflexiva.
      </Paragrafo>
      <Paragrafo className="mt-3">
        Fora dos palcos, seu impacto concentra-se na educação e na valorização da
        estética afro-brasileira. Com o projeto <strong>"Leitura Emancipada"</strong>,
        leva bibliotecas gratuitas às cidades de suas turnês, enquanto seus livros
        infantis seguem como referência de letramento racial nas escolas,
        consolidando-o como uma das vozes mais influentes nos debates sociais
        contemporâneos.
      </Paragrafo>
    </>
  ),

  curiosidades: (
    <>
      <TituloSecao>Fatos Marcantes</TituloSecao>
      <ListaCuriosidades>
        <Curiosidade numero="01">
          <strong>Origem do nome:</strong> vem da junção de MC + homicida, por ele
          vencer quase todas as batalhas de rima. Depois, foi ressignificado por ele
          como "Enquanto Minha Imaginação Compuser Insanidades Domino a Arte".
        </Curiosidade>
        <Curiosidade numero="02">
          <strong>Mixtape nas ruas:</strong> no início da carreira, vendeu milhares de
          cópias de sua primeira mixtape de mão em mão, nas ruas e metrôs de São
          Paulo, por apenas R$ 2,00.
        </Curiosidade>
        <Curiosidade numero="03">
          <strong>Fã de quadrinhos:</strong> é apaixonado por quadrinhos, como X-Men e
          Homem-Aranha, e por animes, temas que frequentemente servem de referência
          em suas rimas e clipes.
        </Curiosidade>
        <Curiosidade numero="04">
          <strong>Fora do Brasil:</strong> sua faixa "9 Círculos" entrou no jogo Max
          Payne 3, e "Pantera Negra" fez parte da campanha oficial brasileira do filme
          da Marvel em 2018.
        </Curiosidade>
      </ListaCuriosidades>
    </>
  ),

  referencias: (
    <>
      <TituloSecao>Fontes e Leituras</TituloSecao>
      <ListaReferencias>
        <Referencia>
          WIKIFAVELAS. <em>Emicida</em>. Dicionário de Favelas Marielle Franco, [s. d.].
          Disponível em:{" "}
          <a
            href="https://wikifavelas.com.br/index.php/Emicida#Vida_pessoal"
            target="_blank"
            rel="noopener"
          >
            wikifavelas.com.br
          </a>
          . Acesso em: 18 nov. 2026.
        </Referencia>
        <Referencia>
          AFROFILE. <em>Emicida</em>. Heróis Afrofile, [s. d.]. Disponível em:{" "}
          <a
            href="https://www.afrofile.com.br/herois/emicida"
            target="_blank"
            rel="noopener"
          >
            afrofile.com.br
          </a>
          . Acesso em: 18 nov. 2026.
        </Referencia>
        <Referencia>
          PENSADOR. <em>Biografia de Emicida</em>. Pensador, [s. d.]. Disponível em:{" "}
          <a
            href="https://www.pensador.com/autor/emicida/biografia/"
            target="_blank"
            rel="noopener"
          >
            pensador.com
          </a>
          . Acesso em: 18 nov. 2026.
        </Referencia>
        <Referencia>
          RAP MÍDIA. <em>Emicida</em>. Rap Mídia, [s. d.]. Disponível em:{" "}
          <a href="https://rapmidia.com.br/emicida/" target="_blank" rel="noopener">
            rapmidia.com.br
          </a>
          . Acesso em: 18 nov. 2026.
        </Referencia>
      </ListaReferencias>
    </>
  ),
};
