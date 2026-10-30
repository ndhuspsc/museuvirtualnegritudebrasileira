import type { ReactNode } from "react";

export interface Personalidade {
  nome: string;
  indexTexto: string;
  fotoBanner: string;
  fotoPerfil: string;
  artistaLink: string;
  artistaArroba: string;
  origem: ReactNode;
  feitos: ReactNode;
  impacto: ReactNode;
  curiosidades: ReactNode;
  referencias: ReactNode;
}

export interface Membro {
  "Nome completo": string;
  "Funções": string;
  "Descrição": string;
  "Foto para o perfil no site": string;
  "Linkedin": string;
  [key: string]: string | undefined;
}
