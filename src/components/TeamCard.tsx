import type { Membro } from "../types";

const FOTO_FALLBACK =
  "https://as1.ftcdn.net/v2/jpg/18/97/90/48/1000_F_1897904899_DsZyh2sYlBJrgFCtUNLr8VZAcllUXk4t.jpg";

function iconePara(funcao: string): string {
  const f = funcao.toLowerCase();
  if (f.includes("desenvolvimento")) return "bi-laptop";
  if (f.includes("pesquisa")) return "bi-book";
  if (f.includes("design")) return "bi-palette";
  if (f.includes("marketing")) return "bi-megaphone";
  if (f.includes("coordena")) return "bi-star-fill";
  return "bi-star";
}

function linkFotoDrive(link?: string): string {
  if (link && link.includes("drive.google.com")) {
    const id = link.match(/[-\w]{25,}/);
    if (id) return `https://lh3.googleusercontent.com/d/${id[0]}`;
  }
  return link ?? "";
}

export default function TeamCard({ membro }: { membro: Membro }) {
  const funcoesRaw = membro["Funções"] ?? "";
  const categorias = funcoesRaw.toLowerCase().replace(/,\s*/g, " ");
  const funcoes = funcoesRaw
    .split(",")
    .map((f) => f.trim())
    .filter(Boolean);

  return (
    <div
      className="col-12 col-sm-6 col-lg-3 team-member"
      data-category={categorias}
    >
      <div className="team-card">
        <div className="team-card-img-wrapper">
          <img
            src={linkFotoDrive(membro["Foto para o perfil no site"])}
            alt={`Foto de ${membro["Nome completo"]}`}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = FOTO_FALLBACK;
            }}
          />
        </div>
        <div className="team-card-body">
          <h3 className="team-card-title">{membro["Nome completo"]}</h3>

          {funcoes.map((funcao) => (
            <div className="mb-2" key={funcao}>
              <span className="team-badge">
                <i className={`bi ${iconePara(funcao)}`}></i> {funcao}
              </span>
            </div>
          ))}

          <p className="team-card-desc mt-2">{membro["Descrição"] ?? ""}</p>

          <div className="team-social mt-auto pt-3">
            <a href={membro["Linkedin"]} target="_blank" rel="noopener">
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
