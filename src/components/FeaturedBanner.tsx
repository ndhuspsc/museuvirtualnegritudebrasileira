import { Link } from "react-router-dom";
import type { Personalidade } from "../types";

export default function FeaturedBanner({
  id,
  expo,
}: {
  id: string;
  expo: Personalidade;
}) {
  return (
    <div
      className="p-5 mb-5 rounded-4 text-white position-relative overflow-hidden shadow-lg"
      style={{ backgroundColor: "var(--teal-dark)" }}
    >
      <div
        className="row align-items-center position-relative"
        style={{ zIndex: 2 }}
      >
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img
            src={expo.fotoPerfil}
            alt={expo.nome}
            className="img-fluid rounded-circle shadow"
            style={{ maxHeight: "280px", border: "4px solid var(--gold)" }}
          />
        </div>
        <div className="col-md-7">
          <span
            className="badge mb-2"
            style={{
              backgroundColor: "var(--gold)",
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Em Destaque Agora
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.5rem",
              marginBottom: "15px",
            }}
          >
            {expo.nome}
          </h2>
          <p className="lead mb-4" style={{ color: "var(--teal-light)" }}>
            {expo.indexTexto}
          </p>
          <Link
            to={`/exposicao.html?id=${id}`}
            className="btn btn-light px-4 py-2"
            style={{
              fontFamily: "'Oswald', sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--teal-dark)",
            }}
          >
            Visitar Exposição Principal
          </Link>
        </div>
      </div>
    </div>
  );
}
