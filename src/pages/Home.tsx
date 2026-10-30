import Header from "../components/Header";
import MuseumCard from "../components/MuseumCard";
import FeaturedBanner from "../components/FeaturedBanner";
import { bancoDeDados, DESTAQUE } from "../data/acervo";

export default function Home() {
  const destaque = bancoDeDados[DESTAQUE];
  const demais = Object.entries(bancoDeDados).filter(
    ([id]) => id !== DESTAQUE,
  );

  return (
    <>
      <div className="sticky-wrapper">
        <Header />
      </div>

      <main className="container mb-5">
        {/* SOBRE O PROJETO (RESUMO) */}
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-md-8 text-center">
            <p className="section-label">Quem Somos</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 2.5rem)",
                color: "var(--dark)",
                marginBottom: "20px",
              }}
            >
              Resgatando a Memória, <br />
              Construindo o Futuro
            </h2>
            <p
              style={{
                color: "var(--mid)",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                marginBottom: "25px",
              }}
            >
              Bem-vindo ao Museu Virtual da Negritude Brasileira. Este espaço é
              dedicado a preservar, celebrar e difundir a trajetória de figuras
              históricas que moldaram a cultura, a ciência e a política do nosso
              país.{" "}
            </p>

            <a
              href="sobre.html"
              className="btn"
              style={{
                backgroundColor: "var(--gold)",
                color: "#fff",
                fontFamily: "'Oswald', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "10px 25px",
                borderRadius: "5px",
              }}
            >
              Conheça o Projeto e a Equipe
            </a>
          </div>
        </div>

        <hr
          style={{
            borderColor: "var(--purple)",
            opacity: 0.5,
            margin: "40px 0",
          }}
        />

        <div id="secao-destaque">
          {destaque && (
            <FeaturedBanner id={DESTAQUE} expo={destaque} />
          )}
        </div>

        <hr
          style={{
            borderColor: "var(--purple)",
            opacity: 0.5,
            margin: "40px 0",
          }}
        />

        {/* ACERVO GERAL */}
        <div className="text-center mb-5">
          <p className="section-label">Acervo Permanente</p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "var(--teal-dark)",
            }}
          >
            Exposições em Cartaz
          </h2>
        </div>

        <div className="row g-4 justify-content-center" id="grid-exposicoes">
          {demais.map(([id, expo]) => (
            <MuseumCard key={id} id={id} expo={expo} />
          ))}
        </div>
      </main>
    </>
  );
}
