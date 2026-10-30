export default function Footer() {
  return (
    <footer id="site-footer">
      <p
        style={{
          color: "#f5e6d8",
          fontSize: "0.85rem",
          marginBottom: "12px",
          opacity: 0.8,
        }}
      >
        Uma iniciativa dos projetos de extensão{" "}
        <strong>Núcleo de Direitos Humanos</strong> e{" "}
        <strong>Museu Virtual do ICMC</strong> — USP São Carlos
      </p>
      <div className="footer-contact">
        <a
          href="https://www.instagram.com/ndh.usp.sc/"
          target="_blank"
          rel="noopener"
        >
          <i className="bi bi-instagram"></i>
          @ndh.usp.sc
        </a>
        <a href="mailto:ndhuspsc@gmail.com">
          <i className="bi bi-envelope"></i>
          ndhuspsc@gmail.com
        </a>
      </div>
    </footer>
  );
}
