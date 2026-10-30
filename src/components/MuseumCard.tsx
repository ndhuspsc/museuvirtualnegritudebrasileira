import { Link } from "react-router-dom";
import type { Personalidade } from "../types";

export default function MuseumCard({
  id,
  expo,
}: {
  id: string;
  expo: Personalidade;
}) {
  return (
    <div className="col-md-5">
      <Link to={`/exposicao.html?id=${id}`} className="museum-card">
        <img src={expo.fotoPerfil} alt={`Exposição ${expo.nome}`} />
        <div className="card-body">
          <h3>{expo.nome}</h3>
          <p>{expo.indexTexto}</p>
          <span
            className="btn btn-outline-dark mt-2"
            style={{
              fontFamily: "'Oswald', sans-serif",
              textTransform: "uppercase",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
            }}
          >
            Visitar Sala
          </span>
        </div>
      </Link>
    </div>
  );
}
