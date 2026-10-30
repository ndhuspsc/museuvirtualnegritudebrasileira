import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie_aceito")) {
      setVisivel(true);
    }
  }, []);

  function aceitar() {
    localStorage.setItem("cookie_aceito", "true");
    setVisivel(false);
  }

  return (
    <div
      id="cookie-banner"
      className="cookie-banner"
      style={{ display: visivel ? "flex" : "none" }}
    >
      <p>
        Utilizamos cookies de análise para melhorar sua experiência no Museu
        Virtual.
        <br /> Ao continuar navegando, você concorda com a nossa política.
      </p>
      <button
        id="aceitar-cookies"
        className="btn btn-sm btn-light text-dark fw-bold"
        onClick={aceitar}
      >
        Entendido
      </button>
    </div>
  );
}
