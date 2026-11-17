import type { ReactNode } from "react";

export interface Personalidade {
  nome: string;
  indexTexto: string;
  fotoBanner: string;
  fotoPerfil: string;
  artistaLink: string;
  artistaArroba: string;
  /**
   * Resumo exibido no topo da página da exposição (estilo "resumo da notícia").
   * Cada item do array vira um tópico, então use de 4 a 5 frases curtas.
   * Aceita texto simples ou JSX (ex.: <>Frase com <strong>destaque</strong>.</>).
   */
  resumo: ReactNode[];
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
