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

export const lucianaAparecida: Personalidade = {
  nome: "Luciana Aparecida Elias",
  indexTexto:
    "Professora Titular da Universidade Federal de Jataí, pesquisadora em Geometria e Cosmologia Matemática e referência nacional na luta antirracista e pela equidade de gênero nas ciências exatas.",
  fotoBanner: "/Assets/LucianaAparecida/fundo.jpg",
  fotoPerfil: "/Assets/LucianaAparecida/lucianaAparecida.png",
  artistaLink: "#",
  artistaArroba: "Acervo Museu Virtual",

  resumo: [
    <>
      Graduada em Matemática (1995) e mestre em Geometria (2000) pela{" "}
      <strong>Universidade Federal de Goiás (UFG)</strong>.
    </>,
    <>
      Concluiu o doutorado em Matemática Aplicada pela{" "}
      <strong>Universidade Estadual de Campinas (UNICAMP)</strong> em <strong>2008</strong>,
      investigando a relação entre cosmologia e princípios variacionais da mecânica.
    </>,
    <>
      Tornou-se <strong>Professora Titular</strong> do Instituto de Ciências Exatas e
      Tecnológicas da <strong>Universidade Federal de Jataí (UFJ)</strong>, em Goiás.
    </>,
    <>
      Atua na formação de professores da educação básica por meio do{" "}
      <strong>PROFMAT</strong> e desenvolve projetos voltados à democratização do ensino
      de matemática.
    </>,
    <>
      Membro da <strong>Comissão de Gênero e Diversidade da SBM/SBMAC</strong>, destaca-se
      pelo ativismo sindical, defesa dos direitos humanos e combate ao racismo na academia.
    </>,
  ],

  origem: (
    <>
      <Paragrafo>
        Luciana Aparecida Elias construiu uma sólida carreira acadêmica no Centro-Oeste
        brasileiro, rompendo barreiras históricas impostas às mulheres negras no ensino
        superior. Realizou sua graduação em Bacharelado em Matemática pela{" "}
        <strong>Universidade Federal de Goiás (UFG)</strong>, concluída em 1995, onde também
        obteve o título de Mestre em Matemática com ênfase em Geometria no ano de 2000.
      </Paragrafo>
      <Paragrafo>
        Em busca de aprofundamento científico na interface entre matemática pura e física
        teórica, ingressou no programa de pós-graduação da{" "}
        <strong>Universidade Estadual de Campinas (UNICAMP)</strong>. Sob orientação do
        professor Alberto Vazquez Saa, defendeu em <strong>2008</strong> a sua tese de
        doutorado em Matemática Aplicada, consolidando sua formação em sistemas dinâmicos,
        geometria diferencial e cosmologia matemática.
      </Paragrafo>
      <Paragrafo>
        Ingressou como docente no campus de Jataí da UFG — instituição que posteriormente se
        emancipou tornando-se a <strong>Universidade Federal de Jataí (UFJ)</strong>. Por meio
        de sua dedicação ao ensino, à pesquisa e à extensão, alcançou o topo da carreira
        docente federal ao tornar-se <strong>Professora Titular</strong> do Instituto de
        Ciências Exatas e Tecnológicas (ICET/UFJ).
      </Paragrafo>
    </>
  ),

  feitos: (
    <>
      <Subtitulo>Da Cosmologia Matemática à Formação de Professores</Subtitulo>
      <Paragrafo>
        A pesquisa de doutorado de Luciana, intitulada{" "}
        <strong>"Cosmologia e o princípio de Maupertuis-Jacobi"</strong>, explorou uma ponte
        sofisticada entre a geometria e a física do universo. Na matemática e na física, o
        princípio de Maupertuis-Jacobi permite reescrever a trajetória de sistemas dinâmicos
        como o caminho mais curto (uma geodésica) em um espaço curvo. Luciana aplicou esse
        formalismo geométrico para estudar modelos cosmológicos com campos escalares (como a
        quintessência, associada à energia escura), ajudando a compreender a evolução e a
        expansão do universo sob a ótica da geometria diferencial.
      </Paragrafo>
      <Paragrafo>
        Além da pesquisa teórica em Geometria e Sistemas Dinâmicos, Luciana desempenha um
        papel fundamental na qualificação do ensino público brasileiro por meio de sua
        atuação no <strong>PROFMAT</strong> (Programa de Mestrado Profissional em Matemática
        em Rede Nacional) na UFJ. Como orientadora, guia professores da rede básica no
        desenvolvimento de metodologias inovadoras para o ensino de geometria, trigonometria e
        resolução de problemas.
      </Paragrafo>
      <Paragrafo>
        Sua atuação institucional também abrange a gestão acadêmica e o movimento sindical
        docente, articulando a defesa da universidade pública, gratuita e socialmente
        referenciada com políticas de permanência estudantil no interior de Goiás.
      </Paragrafo>
    </>
  ),

  impacto: (
    <>
      <TituloSecao>Protagonismo Negro e Equidade nas Exatas</TituloSecao>
      <Paragrafo>
        Luciana Aparecida Elias é uma das vozes mais atuantes na promoção da diversidade
        racial e de gênero dentro da comunidade matemática brasileira. Como integrante da{" "}
        <strong>
          Comissão de Gênero e Diversidade da Sociedade Brasileira de Matemática (SBM) e da
          Sociedade Brasileira de Matemática Aplicada e Computacional (SBMAC)
        </strong>
        , trabalha ativamente para mapear desigualdades, combater o racismo institucional e
        criar redes de acolhimento para meninas e mulheres negras nas ciências exatas.
      </Paragrafo>
      <Citacao>
        "A luta pelos direitos humanos chegou na minha vida como necessidade."
      </Citacao>
      <Paragrafo>
        Ao ocupar o cargo de Professora Titular em uma universidade federal e participar de
        mesas de discussão nacionais — como o Encontro Brasileiro de Mulheres Matemáticas
        (EBMM) —, Luciana transforma a sua própria trajetória em instrumento de inspiração e
        disputa de narrativas. Sua atuação demonstra que a excelência em matemática pura e
        aplicada caminha lado a lado com o compromisso ético e político pela transformação
        social.
      </Paragrafo>
      <Paragrafo>
        Em reconhecimento à sua contribuição científica, educacional e à luta antirracista,
        recebeu homenagens institucionais no estado de Goiás e tornou-se referência
        obrigatória em levantamentos sobre cientistas negras que reconfiguram o panorama da
        Matemática no Brasil contemporâneo.
      </Paragrafo>
    </>
  ),

  curiosidades: (
    <>
      <TituloSecao>Fatos Marcantes</TituloSecao>
      <ListaCuriosidades>
        <Curiosidade numero="01">
          <strong>Geometria do Cosmos:</strong> Na sua tese de doutorado na UNICAMP,
          utilizou ferramentas avançadas de geometria diferencial para estudar modelos de
          energia escura (quintessência) na cosmologia relativística.
        </Curiosidade>
        <Curiosidade numero="02">
          <strong>Liderança Nacional na SBM/SBMAC:</strong> Integra a Comissão de Gênero e
          Diversidade das principais sociedades matemáticas do país, articulando políticas de
          inclusão racial e de gênero em eventos científicos nacionais.
        </Curiosidade>
        <Curiosidade numero="03">
          <strong>Compromisso Sindical e Direitos Humanos:</strong> Além da carreira
          científica, possui trajetória marcada pela militância no movimento sindical docente
          e na defesa dos direitos humanos, tendo sua história retratada em programas como{" "}
          <em>Cultne em Resenha</em> e <em>Trajetória</em>.
        </Curiosidade>
      </ListaCuriosidades>
    </>
  ),

  referencias: (
    <>
      <TituloSecao>Fontes e Leituras</TituloSecao>
      <ListaReferencias>
        <Referencia>
          ELIAS, Luciana Aparecida.{" "}
          <em>Cosmologia e o princípio de Maupertuis-Jacobi.</em> Tese (Doutorado em
          Matemática Aplicada) – Instituto de Matemática, Estatística e Computação Científica
          (IMECC), Universidade Estadual de Campinas, Campinas, 2008. Disponível em:{" "}
          <a
            href="https://repositorio.unicamp.br/acervo/detalhe/421110"
            target="_blank"
            rel="noopener"
          >
            repositorio.unicamp.br
          </a>
        </Referencia>
        <Referencia>
          UNIVERSIDADE FEDERAL DE JATAÍ (UFJ).{" "}
          <em>Portal Docente: Profa. Dra. Luciana Aparecida Elias.</em> Disponível em:{" "}
          <a
            href="https://matematica.jatai.ufg.br/p/27847-luciana-aparecida-elias"
            target="_blank"
            rel="noopener"
          >
            matematica.jatai.ufg.br
          </a>
        </Referencia>
        <Referencia>
          SOCIEDADE BRASILEIRA DE MATEMÁTICA (SBM).{" "}
          <em>
            Integrante da Comissão de Gênero e Diversidade SBM/SBMAC recebe homenagem em
            Goiás.
          </em>{" "}
          2023. Disponível em:{" "}
          <a
            href="https://sbm.org.br/noticias/integrante-da-comissao-de-genero-e-diversidade-sbm-sbmac-recebe-homenagem-em-goias/"
            target="_blank"
            rel="noopener"
          >
            sbm.org.br
          </a>
        </Referencia>
        <Referencia>
          CULTNE.{" "}
          <em>Cultne em Resenha – Programa com Profa. Dra. Luciana Aparecida Elias.</em>{" "}
          Acervo Cultne, 2022.
        </Referencia>
      </ListaReferencias>
    </>
  ),
};