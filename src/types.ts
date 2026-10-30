export interface Personalidade {
  destaque: boolean;
  nome: string;
  indexTexto: string;
  fotoBanner: string;
  fotoPerfil: string;
  artistaLink: string;
  artistaArroba: string;
  origemHTML: string;
  feitosHTML: string;
  impactoHTML: string;
  curiosidadesHTML: string;
  referenciasHTML: string;
}

export interface Membro {
  "Nome completo": string;
  "Funções": string;
  "Descrição": string;
  "Foto para o perfil no site": string;
  "Linkedin": string;
  [key: string]: string | undefined;
}
