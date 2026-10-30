import { useEffect, useState } from "react";
import Papa from "papaparse";
import Header from "../components/Header";
import TeamCard from "../components/TeamCard";
import type { Membro } from "../types";

const URL_PLANILHA =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQB8-lf9fJE0mM2dLV5bDEe7Flmejil4lLB6WHtLReZBgar0WeNQW2T0B80Rzwx1tUOiWJN9q1Sxhpm/pub?output=csv";

const FILTROS = [
  { valor: "todos", rotulo: "Todos", icone: "bi-people-fill" },
  { valor: "Desenvolvimento", rotulo: "Desenvolvimento", icone: "bi-laptop" },
  { valor: "Pesquisa", rotulo: "Curadoria & Pesquisa", icone: "bi-book" },
  { valor: "Design", rotulo: "Design", icone: "bi-palette" },
  { valor: "Marketing", rotulo: "Marketing", icone: "bi-megaphone" },
];

export default function Sobre() {
  const [membros, setMembros] = useState<Membro[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [filtro, setFiltro] = useState("todos");

  useEffect(() => {
    Papa.parse<Membro>(URL_PLANILHA, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (resultados) => {
        setMembros(resultados.data);
        setCarregando(false);
      },
      error: (erro) => {
        console.error("Erro ao ler a planilha:", erro);
        setCarregando(false);
      },
    });
  }, []);

  const filtroLower = filtro.toLowerCase();
  const visiveis = membros.filter((m) => {
    if (filtroLower === "todos") return true;
    const categorias = (m["Funções"] ?? "")
      .toLowerCase()
      .replace(/,\s*/g, " ")
      .split(" ");
    return categorias.includes(filtroLower);
  });

  return (
    <>
      {/* HEADER */}
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
              <a href="#sobre">Sobre o Projeto</a>
            </li>
            <li>
              <a href="#equipe">Nossa Equipe</a>
            </li>
          </ul>
        </nav>
      </div>

      <main className="container py-5 mb-5">
        {/* SOBRE O MUSEU */}
        <section
          id="sobre"
          className="mb-5 pb-4"
          style={{
            borderBottom: "1px solid var(--border)",
            maxWidth: "820px",
            margin: "0 auto",
          }}
        >
          <p className="section-label text-center">A Iniciativa</p>
          <h2
            className="section-title text-center"
            style={{ marginBottom: "1.5rem" }}
          >
            O Projeto Museu Virtual
          </h2>
          <p className="text-center" style={{ color: "var(--mid)", fontSize: "1.1rem" }}>
            O museu nasceu como um projeto do{" "}
            <strong>Núcleo de Direitos Humanos da USP São Carlos</strong>,
            projeto orientado pelo professor{" "}
            <a
              href="https://sites.icmc.usp.br/njunior/"
              style={{ color: "var(--purple)" }}
            >
              <i>Nivaldo de Góes Grulha Júnior</i>
            </a>{" "}
            e estudantes do <strong>ICMC</strong>.{" "}
          </p>
          <p>
            Nosso objetivo é resgatar, preservar e difundir as trajetórias de
            figuras históricas negras que moldaram a cultura, a política e a
            ciência do Brasil, mas que muitas vezes foram invisibilizadas pela
            narrativa tradicional.
          </p>
        </section>

        {/* COORDENAÇÃO (DESTAQUE) */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-md-10 col-lg-8">
            <div
              className="team-card d-flex flex-column flex-md-row align-items-center p-3"
              style={{
                border: "2px solid var(--gold)",
                backgroundColor: "var(--off-white)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "4px solid #fff",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  flexShrink: 0,
                  margin: "15px",
                }}
              >
                <img
                  src="/Assets/Membros/nivaldo.jpg"
                  alt="Prof. Dr. Nivaldo Grulha"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcl_-AnKs8MCZoimz4Iga_LBpNkk5VgErtNOLW2Afpb0U4U7LVwC-yz4Q&s=10";
                  }}
                />
              </div>

              <div
                className="team-card-body text-center text-md-start p-4 flex-grow-1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h3 className="team-card-title mb-1" style={{ fontSize: "1.6rem" }}>
                  Prof. Dr. Nivaldo de Góes Grulha Júnior
                </h3>

                <div className="mb-3">
                  <span
                    className="team-badge"
                    style={{
                      backgroundColor: "var(--teal)",
                      color: "#fff",
                      fontSize: "0.8rem",
                      padding: "6px 12px",
                    }}
                  >
                    <i className="bi bi-star-fill"></i> Coordenador do Projeto
                  </span>
                </div>

                <p className="team-card-desc mb-4">
                  Professor Associado (Nível 3) do Departamento de Matemática do
                  ICMC-USP, em São Carlos. Presidente do Núcleo de Direitos
                  Humanos e orientador central desta iniciativa.
                </p>

                <div
                  className="team-social mt-auto d-flex justify-content-center justify-content-md-start gap-4"
                  style={{ borderTop: "none", paddingTop: 0 }}
                >
                  <a
                    href="https://www.linkedin.com/in/grulha/"
                    target="_blank"
                    rel="noopener"
                    style={{ fontSize: "0.95rem" }}
                  >
                    <i className="bi bi-linkedin"></i> LinkedIn
                  </a>
                  <a
                    href="https://sites.icmc.usp.br/njunior/"
                    target="_blank"
                    rel="noopener"
                    style={{ fontSize: "0.95rem" }}
                  >
                    <i className="bi bi-globe"></i> Site Acadêmico
                  </a>
                  <a
                    className="pill"
                    href="http://lattes.cnpq.br/2826657824341747"
                    target="_blank"
                    rel="noopener"
                  >
                    Currículo Lattes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EQUIPE */}
        <section id="equipe" className="pt-4">
          <div className="text-center mb-5">
            <p className="section-label">Quem Somos</p>
            <h2 className="section-title text-center" style={{ marginBottom: "1rem" }}>
              Nossa Equipe
            </h2>
            <p style={{ color: "var(--mid)", maxWidth: "600px", margin: "0 auto" }}>
              Conheça as pessoas dedicadas à pesquisa, desenvolvimento, design e
              curadoria que tornam este projeto possível.
            </p>
          </div>

          {/* TABS DE FILTRO */}
          <ul
            className="nav nav-pills justify-content-center mb-5 team-filter"
            id="pills-tab"
            role="tablist"
          >
            {FILTROS.map((f) => (
              <li className="nav-item" role="presentation" key={f.valor}>
                <button
                  className={`nav-link${filtro === f.valor ? " active" : ""}`}
                  type="button"
                  onClick={() => setFiltro(f.valor)}
                >
                  <i className={`bi ${f.icone}`}></i> {f.rotulo}
                </button>
              </li>
            ))}
          </ul>

          <div className="row justify-content-center g-4" id="grid-equipe">
            {carregando ? (
              <p className="text-center">Carregando equipe...</p>
            ) : (
              visiveis.map((membro, i) => (
                <TeamCard key={membro["Nome completo"] ?? i} membro={membro} />
              ))
            )}
          </div>
        </section>
      </main>
    </>
  );
}
