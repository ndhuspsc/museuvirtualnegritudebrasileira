# Museu Virtual da Negritude Brasileira

Site do Museu Virtual da Negritude Brasileira — um projeto do Núcleo de Direitos
Humanos da USP São Carlos. Catálogo de personalidades negras brasileiras
apresentado como museu virtual.

Construído com **React + TypeScript + Vite**. Deploy na **Vercel**.

## Desenvolvimento

```bash
npm install     # instala dependências
npm run dev     # servidor de desenvolvimento (http://localhost:5173)
npm run build   # build de produção em dist/
npm run preview # serve o build de produção localmente
```

## Estrutura

```
index.html            entry do Vite
vercel.json           rewrite SPA (todas as rotas -> index.html)
public/Assets/        imagens das personalidades e da equipe
src/
  main.tsx            monta o router + Vercel Analytics
  App.tsx             rotas + Footer + CookieBanner
  types.ts            interfaces Personalidade e Membro
  data/
    acervo.tsx        agrega as personalidades (define a ordem no grid)
    personalidades/   uma personalidade por arquivo .tsx
  components/         Header, Footer, CookieBanner, MuseumCard,
                      FeaturedBanner, TeamCard
                      conteudo.tsx (blocos: Paragrafo, Citacao, Figura...)
  pages/              Home, Exposicao, Sobre
  styles/style.css    estilos do site
```

## Adicionar uma personalidade

1. Crie `src/data/personalidades/nome-curto.tsx` exportando um `Personalidade`.
   O conteúdo das seções é JSX, montado com os blocos de `components/conteudo`.
   O TypeScript exige que todos os campos sejam preenchidos.
2. Importe e registre a pessoa em `src/data/acervo.tsx`. A chave vira o `id` da
   URL (`exposicao.html?id=nome-curto`) e a ordem ali define a ordem no grid.
3. Coloque as imagens em `public/Assets/NomePasta/` e use caminho absoluto
   (`/Assets/...`).

```tsx
// src/data/personalidades/nome-curto.tsx
import type { Personalidade } from "../../types";
import { Paragrafo, Citacao } from "../../components/conteudo";

export const nomeCurto: Personalidade = {
  destaque: false,              // true coloca a pessoa no banner da home
  nome: "Nome Completo",
  indexTexto: "Resumo curto exibido no card e no banner.",
  fotoBanner: "/Assets/NomePasta/fundo.jpg",
  fotoPerfil: "/Assets/NomePasta/perfil.png",
  artistaLink: "https://instagram.com/...",
  artistaArroba: "@artista",
  origem: (
    <>
      <Paragrafo>Texto com <strong>negrito</strong> e <em>itálico</em>.</Paragrafo>
      <Citacao>Uma citação em destaque.</Citacao>
    </>
  ),
  feitos: ( /* ... */ ),
  impacto: ( /* ... */ ),
  curiosidades: ( /* ... */ ),
  referencias: ( /* ... */ ),
};
```

Blocos disponíveis em `components/conteudo.tsx`: `Paragrafo` (aceita
`className`), `Citacao`, `TituloSecao`, `Subtitulo`, `Figura`,
`ListaCuriosidades`/`Curiosidade`, `ListaReferencias`/`Referencia`.

## Equipe

A seção "Nossa Equipe" (página Sobre) é carregada de uma planilha Google Sheets
publicada como CSV (ver `URL_PLANILHA` em `src/pages/Sobre.tsx`), via PapaParse.
Editar a planilha atualiza o site sem precisar de deploy.

## Deploy

A Vercel detecta o Vite automaticamente (build `vite build`, output `dist`). O
`vercel.json` garante que recarregar uma rota como `exposicao.html?id=...` não
dê 404. Push para a branch principal dispara o deploy.
```
