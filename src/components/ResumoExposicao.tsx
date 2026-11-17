import type { CSSProperties, ReactNode } from "react";

// Caixa de "resumo da exposição", exibida no topo da página de cada
// personalidade (no estilo do "resumo da notícia" de portais de notícias).
//
// Os estilos ficam em src/styles/style.css, na seção "Resumo da exposição".
// Uso:  <ResumoExposicao topicos={dados.resumo} />

export default function ResumoExposicao({ topicos }: { topicos: ReactNode[] }) {
  // Sem tópicos, não mostra a caixa (evita um bloco vazio na tela).
  if (topicos.length === 0) return null;

  return (
    <div className="resumo-wrapper">
      <section className="resumo" aria-labelledby="resumo-titulo">
        <header className="resumo__cabecalho">
          <span className="resumo__selo">
            <i className="bi bi-lightning-charge-fill" aria-hidden="true"></i>
            Resumo da exposição
          </span>
          <h2 id="resumo-titulo" className="resumo__titulo">
            Em poucas palavras
          </h2>
        </header>

        <ul className="resumo__lista">
          {topicos.map((topico, i) => (
            // "--i" guarda a posição do item para o CSS escalonar a animação.
            // O "as CSSProperties" é necessário porque o TypeScript não conhece
            // variáveis CSS personalizadas dentro de style={{ }}.
            <li key={i} style={{ "--i": i } as CSSProperties}>
              {topico}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
