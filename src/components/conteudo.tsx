import type { ReactNode } from "react";

// Componentes de conteúdo das exposições. Cada um embrulha a marcação e a
// classe CSS que o site já usa — não mudam o visual, só dão tipagem e nomes
// legíveis aos blocos usados nos textos das personalidades.

export function Paragrafo({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={className}>{children}</p>;
}

export function Citacao({ children }: { children: ReactNode }) {
  return <div className="pull-quote">{children}</div>;
}

export function TituloSecao({ children }: { children: ReactNode }) {
  return <h2 className="section-title">{children}</h2>;
}

export function Subtitulo({ children }: { children: ReactNode }) {
  return <h6>{children}</h6>;
}

export function Figura({
  src,
  alt,
  legenda,
  ocultarSeErro,
}: {
  src: string;
  alt: string;
  legenda: ReactNode;
  ocultarSeErro?: boolean;
}) {
  return (
    <figure>
      <div className="section-photo">
        <img
          className="hero-foreground-img"
          src={src}
          alt={alt}
          onError={
            ocultarSeErro
              ? (e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.style.height = "0";
                  img.style.margin = "0";
                }
              : undefined
          }
        />
      </div>
      <figcaption>{legenda}</figcaption>
    </figure>
  );
}

export function ListaCuriosidades({ children }: { children: ReactNode }) {
  return <ul className="curiosidades-list">{children}</ul>;
}

export function Curiosidade({
  numero,
  children,
}: {
  numero: string;
  children: ReactNode;
}) {
  return (
    <li>
      <div className="num">{numero}</div>
      <p>{children}</p>
    </li>
  );
}

export function ListaReferencias({ children }: { children: ReactNode }) {
  return <ul className="ref-list">{children}</ul>;
}

export function Referencia({ children }: { children: ReactNode }) {
  return <li>{children}</li>;
}
