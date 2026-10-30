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
  data/acervo.ts      banco de dados das personalidades (tipado)
  components/         Header, Footer, CookieBanner, MuseumCard,
                      FeaturedBanner, TeamCard
  pages/              Home, Exposicao, Sobre
  styles/style.css    estilos do site
```

## Adicionar uma personalidade

Edite `src/data/acervo.ts` e acrescente uma entrada ao objeto `bancoDeDados`.
A chave vira o `id` usado na URL (`exposicao.html?id=sua-chave`). O TypeScript
exige que todos os campos de `Personalidade` sejam preenchidos:

```ts
"nome-curto": {
  destaque: false,              // true coloca a pessoa no banner da home
  nome: "Nome Completo",
  indexTexto: "Resumo curto exibido no card e no banner.",
  fotoBanner: "/Assets/NomePasta/fundo.jpg",
  fotoPerfil: "/Assets/NomePasta/perfil.png",
  artistaLink: "https://instagram.com/...",
  artistaArroba: "@artista",
  origemHTML: `...`,            // conteúdo HTML das seções
  feitosHTML: `...`,
  impactoHTML: `...`,
  curiosidadesHTML: `...`,
  referenciasHTML: `...`,
}
```

Coloque as imagens em `public/Assets/NomePasta/` e referencie-as com caminho
absoluto (`/Assets/...`).

## Equipe

A seção "Nossa Equipe" (página Sobre) é carregada de uma planilha Google Sheets
publicada como CSV (ver `URL_PLANILHA` em `src/pages/Sobre.tsx`), via PapaParse.
Editar a planilha atualiza o site sem precisar de deploy.

## Deploy

A Vercel detecta o Vite automaticamente (build `vite build`, output `dist`). O
`vercel.json` garante que recarregar uma rota como `exposicao.html?id=...` não
dê 404. Push para a branch principal dispara o deploy.
```
