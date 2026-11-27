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

export const julianeFonseca: Personalidade = {
  nome: "Juliane Fonseca de Oliveira",
  indexTexto:
    "Matemática baiana que une equações diferenciais, ciência de dados e saúde pública para antecipar surtos epidêmicos e combater desigualdades sociais no Brasil.",
  fotoBanner: "/Assets/JulianeFonseca/fundo.jpg",
  fotoPerfil: "/Assets/JulianeFonseca/julianefonseca.webp",
  artistaLink: "https://www.instagram.com/al.umbramento",
  artistaArroba: "@al.umbramento",

  resumo: [
    <>
      Nascida na Bahia, graduou-se em Matemática pela{" "}
      <strong>Universidade Federal da Bahia (UFBA)</strong>, desafiando a sub-representação
      histórica nas ciências exatas.
    </>,
    <>
      Concluiu o doutorado em Matemática em <strong>2017</strong> em regime de cotutela
      internacional entre as universidades do Porto e de Coimbra, em Portugal.
    </>,
    <>
      Especialista em sistemas dinâmicos, redirecionou sua pesquisa para a{" "}
      <strong>modelagem matemática aplicada à epidemiologia</strong> de doenças infecciosas.
    </>,
    <>
      Pesquisadora associada ao <strong>CIDACS (Fiocruz Bahia)</strong> e ao CMUP,
      coordenou estudos de grande impacto sobre COVID-19, arboviroses e sistemas de alerta
      precoce no Amazonas.
    </>,
    <>
      Publicou em periódicos de prestígio mundial como <em>Nature Medicine</em> e{" "}
      <em>The Lancet</em>, evidenciando como as desigualdades sociais moldam o impacto das
      epidemias.
    </>,
  ],

  origem: (
    <>
      <Paragrafo>
        Juliane Fonseca de Oliveira nasceu na Bahia e construiu a base da sua trajetória
        acadêmica na <strong>Universidade Federal da Bahia (UFBA)</strong>, onde se graduou
        em Matemática[cite: 1]. Em um cenário nacional em que as ciências exatas permanecem
        historicamente brancas e masculinas, Juliane seguiu na contramão das estatísticas ao
        avançar para a pós-graduação de alto nível[cite: 1].
      </Paragrafo>
      <Paragrafo>
        O seu doutorado em Matemática foi realizado em regime de cotutela entre a{" "}
        <strong>Universidade do Porto</strong> e a <strong>Universidade de Coimbra</strong>,
        em Portugal, sendo concluído em <strong>2017</strong>[cite: 1]. Essa formação
        internacional abriu portas para uma atuação que combina rigor teórico com aplicação
        prática: inicialmente especialista em sistemas dinâmicos, redirecionou sua carreira
        para a modelagem matemática aplicada à epidemiologia de doenças infecciosas[cite: 1].
      </Paragrafo>
      <Paragrafo>
        Atualmente, Juliane atua como pesquisadora associada do{" "}
        <strong>Centro de Integração de Dados e Conhecimentos para Saúde (CIDACS)</strong>,
        unidade da Fiocruz Bahia, além de ser membro associado do Centro de Matemática da
        Universidade do Porto (CMUP)[cite: 1]. Sua trajetória a consolidou como uma
        matemática negra brasileira que utiliza equações para decifrar a propagação de
        doenças e revelar como as desigualdades estruturais moldam esse espalhamento[cite: 1].
      </Paragrafo>
    </>
  ),

  feitos: (
    <>
      <Subtitulo>Modelagem Matemática e Vigilância Epidemiológica</Subtitulo>
      <Paragrafo>
        A investigação científica de Juliane ultrapassa os modelos puramente abstratos: seu
        foco está em compreender a disseminação e o controle de doenças infecciosas em
        grandes populações, gerando evidências para orientar políticas públicas eficazes[cite: 1].
        Ao longo de sua carreira, liderou e integrou estudos sobre COVID-19, tuberculose,
        hanseníase e arboviroses como dengue, chikungunya e zika[cite: 1].
      </Paragrafo>
      <Paragrafo>
        Um de seus trabalhos de maior projeção internacional foi a{" "}
        <strong>modelagem matemática da COVID-19 na Bahia</strong>, publicada em 2021 na{" "}
        <em>Nature Communications</em>, que analisou a dinâmica de transmissão do vírus em uma
        população de 14,8 milhões de habitantes[cite: 1, 3].
      </Paragrafo>
      <Paragrafo>
        Mais recentemente, integrou equipes responsáveis pelo desenvolvimento de sistemas de
        alerta precoce para surtos de doenças respiratórias[cite: 1]. Em 2026, publicou na{" "}
        <em>The Lancet Regional Health – Americas</em> a implementação e validação do{" "}
        <strong>sistema AESOP no Amazonas</strong>, utilizando dados rotineiros de saúde
        para antecipar surtos antes de seu agravamento[cite: 1]. Anteriormente, em 2024, publicou na{" "}
        <em>Nature Medicine</em> um estudo fundamental sobre o uso da modelagem matemática
        como ferramenta para a equidade em saúde de precisão[cite: 1, 2, 3].
      </Paragrafo>
      <Paragrafo>
        Paralelamente à produção de dezenas de artigos de alto impacto, Juliane dedica-se
        ativamente à <strong>divulgação científica</strong>, participando de palestras e
        escrevendo para veículos de comunicação pública com o objetivo de traduzir a
        complexidade dos modelos epidêmicos para gestores e para a sociedade[cite: 2].
      </Paragrafo>
    </>
  ),

  impacto: (
    <>
      <TituloSecao>Matemática Contra a Desigualdade</TituloSecao>
      <Paragrafo>
        A relevância de Juliane Fonseca de Oliveira transcende suas publicações acadêmicas.
        Em um campo onde a presença de mulheres negras ainda é rara nos postos de liderança,
        ela ocupa espaços estratégicos de decisão científica e produção de conhecimento de
        fronteira[cite: 2].
      </Paragrafo>
      <Paragrafo>
        Suas pesquisas fortalecem diretamente a capacidade do Brasil de responder a
        emergências sanitárias[cite: 2]. Os sistemas de alerta precoce e os modelos de mobilidade
        humana desenvolvidos por suas equipes permitem que gestores públicos identifiquem
        onde e quando agir antes que um surto local se transforme em epidemia[cite: 2].
      </Paragrafo>
      <Citacao>
        "A maior parte dos casos é notificada em zonas ricas, e a maior parte dos óbitos
        acontece em zonas pobres."
      </Citacao>
      <Paragrafo>
        Proferida ao analisar os dados da COVID-19 em Salvador, a frase sintetiza a
        perversidade social que a matemática ajuda a comprovar: o vírus circula por todos os
        territórios, mas mata sobretudo onde a vulnerabilidade socioeconômica já era crônica[cite: 2].
        Como a própria pesquisadora já alertou, o descaso com a população mais pobre precede
        a pandemia, sendo evidenciado por anos de estudos com tuberculose, hanseníase e dengue[cite: 2].
      </Paragrafo>
      <Paragrafo>
        Juliane representa uma mudança de paradigma na matemática aplicada ao demonstrar que{" "}
        <strong>os modelos não são neutros</strong>[cite: 2]. Ao incorporar variáveis de
        desigualdade social em suas equações, ela prova que a ciência exata pode operar como
        um poderoso instrumento de justiça social[cite: 2].
      </Paragrafo>
    </>
  ),

  curiosidades: (
    <>
      <TituloSecao>Fatos Marcantes</TituloSecao>
      <ListaCuriosidades>
        <Curiosidade numero="01">
          <strong>Dupla Titulação Europeia:</strong> Juliane é doutora em Matemática por
          duas universidades europeias simultaneamente — Universidade do Porto e
          Universidade de Coimbra —, um feito alcançado por poucos pesquisadores
          brasileiros em início de carreira[cite: 2, 3].
        </Curiosidade>
        <Curiosidade numero="02">
          <strong>Da Abstração à Saúde Pública:</strong> Sua tese de doutorado investigou a
          teoria de bifurcação equivariante e a formação de padrões em sistemas simétricos,
          um ramo altamente abstrato da matemática pura, cujo rigor ela posteriormente
          aplicou para salvar vidas no combate a epidemias[cite: 3].
        </Curiosidade>
        <Curiosidade numero="03">
          <strong>Elite Científica Global:</strong> É uma das poucas pesquisadoras negras
          brasileiras a publicar como autora de destaque em periódicos como{" "}
          <em>Nature Medicine</em> e <em>The Lancet Regional Health – Americas</em>,
          ocupando espaços historicamente restritos a uma elite científica branca[cite: 3].
        </Curiosidade>
      </ListaCuriosidades>
    </>
  ),

  referencias: (
    <>
      <TituloSecao>Fontes e Leituras</TituloSecao>
      <ListaReferencias>
        <Referencia>
          OLIVEIRA, Juliane Fonseca de. <em>Perfil acadêmico (ORCID: 0000-0002-7167-8754).</em>{" "}
          Disponível em:{" "}
          <a
            href="https://orcid.org/0000-0002-7167-8754"
            target="_blank"
            rel="noopener"
          >
            orcid.org
          </a>[cite: 3]
        </Referencia>
        <Referencia>
          CIDACS / FIOCRUZ BAHIA. <em>Pesquisadores: Juliane Fonseca de Oliveira.</em>{" "}
          Disponível em:{" "}
          <a
            href="https://cidacs.bahia.fiocruz.br"
            target="_blank"
            rel="noopener"
          >
            cidacs.bahia.fiocruz.br
          </a>[cite: 3]
        </Referencia>
        <Referencia>
          CENTRO DE MATEMÁTICA DA UNIVERSIDADE DO PORTO (CMUP).{" "}
          <em>Juliane Fonseca de Oliveira.</em> Disponível em:{" "}
          <a href="https://www.cmup.pt" target="_blank" rel="noopener">
            cmup.pt
          </a>[cite: 3]
        </Referencia>
        <Referencia>
          OLIVEIRA, J. F. et al.{" "}
          <em>
            Mathematical modeling of COVID-19 in 14.8 million individuals in Bahia, Brazil.
          </em>{" "}
          Nature Communications, 2021[cite: 3].
        </Referencia>
        <Referencia>
          OLIVEIRA, J. F. et al.{" "}
          <em>Mathematical modelling as a tool for precision health equity.</em> Nature
          Medicine, 2024[cite: 3].
        </Referencia>
        <Referencia>
          OLIVEIRA, J. F. et al.{" "}
          <em>
            Balancing Human Mobility and Health Care Coverage in Sentinel Surveillance of
            Brazilian Indigenous Areas: Mathematical Optimization Approach.
          </em>{" "}
          JMIR Public Health and Surveillance, 2025[cite: 3].
        </Referencia>
      </ListaReferencias>
    </>
  ),
};