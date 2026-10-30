import { useSearchParams, Navigate } from "react-router-dom";
import { track } from "@vercel/analytics";
import Header from "../components/Header";
import { bancoDeDados } from "../data/acervo";

const ID_PERGUNTA_FORMS = "110415446";

export default function Exposicao() {
  const [params] = useSearchParams();
  const id = params.get("id") ?? "";
  const dados = bancoDeDados[id];

  if (!dados) {
    return <Navigate to="/" replace />;
  }

  document.title = `Museu Virtual | Negritudes Brasileiras — ${dados.nome}`;

  const linkForms = `https://docs.google.com/forms/d/e/1FAIpQLSen1Nn49eSJVFsBpm1HkDdbMkBlGdt2wQA8-EriGywj7F7F5w/viewform?usp=pp_url&entry.${ID_PERGUNTA_FORMS}=${encodeURIComponent(
    dados.nome,
  )}`;

  return (
    <>
      {/* HEADER GLOBAL */}
      <div className="sticky-wrapper">
        <Header />
        <nav id="toc-nav" aria-label="Seções da página">
          <ul>
            <li>
              <a
                href="index.html"
                style={{
                  color: "var(--dark)",
                  borderRight: "1px solid var(--border)",
                  marginRight: "10px",
                }}
              >
                <i className="bi bi-arrow-left"></i> Acervo
              </a>
            </li>
            <li>
              <a href="#origem">Origem</a>
            </li>
            <li>
              <a href="#feitos">Feitos</a>
            </li>
            <li>
              <a href="#impacto">Impacto nos dias atuais</a>
            </li>
            <li>
              <a href="#curiosidades">Curiosidades</a>
            </li>
            <li>
              <a href="#referencias">Referências</a>
            </li>
            <li>
              <a
                href="sobre.html"
                style={{
                  color: "var(--purple)",
                  borderLeft: "1px solid var(--border)",
                  marginRight: "10px",
                }}
              >
                {" "}
                Sobre <i className="bi bi-arrow-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* HERO DINÂMICO */}
      <section id="hero">
        <img
          id="img-banner"
          src={dados.fotoBanner}
          className="hero-background-img"
          alt="Banner de Fundo"
        />
        <img
          id="img-perfil"
          src={dados.fotoPerfil}
          className="hero-foreground-img"
          alt="Foto da Personalidade"
        />
      </section>

      {/* CRÉDITO DO ARTISTA */}
      <div className="artist-credit">
        🎨 Arte desenvolvida por{" "}
        <a id="link-artista" href={dados.artistaLink} target="_blank" rel="noopener">
          <i className="bi bi-instagram"></i>{" "}
          <span id="nome-artista">{dados.artistaArroba}</span>
        </a>
      </div>

      <main>
        {/* ORIGEM */}
        <section id="origem" className="content-section">
          <p className="section-label">01 — Origem</p>
          <h2 className="section-title">Nascimento e Formação</h2>
          <div id="conteudo-origem">{dados.origem}</div>
        </section>

        {/* FEITOS */}
        <section id="feitos" className="content-section">
          <p className="section-label">02 — Feitos</p>
          <h2 className="section-title">Legados e Conquistas</h2>
          <div id="conteudo-feitos">{dados.feitos}</div>
        </section>

        <section id="impacto" className="content-section">
          <p className="section-label">03 — Impacto nos Dias Atuais</p>
          <div id="conteudo-impacto">{dados.impacto}</div>
        </section>

        <section id="curiosidades" className="content-section">
          <p className="section-label">04 — Curiosidades</p>
          <div id="conteudo-curiosidades">{dados.curiosidades}</div>
        </section>

        <section id="referencias" className="content-section">
          <p className="section-label">05 — Referências</p>
          <div id="conteudo-referencias">{dados.referencias}</div>
        </section>

        {/* FEEDBACK */}
        <section
          className="py-5 text-center"
          style={{
            backgroundColor: "var(--teal-light)",
            borderTop: "2px solid var(--border)",
            marginTop: "60px",
          }}
        >
          <div className="container" style={{ maxWidth: "650px" }}>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--teal-dark)",
                marginBottom: "10px",
              }}
            >
              O que achou desta exposição?
            </h3>
            <p style={{ color: "var(--mid)", marginBottom: "20px" }}>
              Sua opinião nos ajuda a aprimorar o conteúdo e o alcance do nosso
              museu virtual.
            </p>
            <a
              href={linkForms}
              id="btn-feedback"
              target="_blank"
              rel="noopener"
              className="btn"
              style={{
                backgroundColor: "var(--teal)",
                color: "#fff",
                fontFamily: "'Oswald', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "12px 30px",
                borderRadius: "5px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
              onClick={() =>
                track("clique_enquete", { local: "Pagina de Exposição" })
              }
            >
              <i className="bi bi-chat-heart-fill"></i> Deixar seu Feedback
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
