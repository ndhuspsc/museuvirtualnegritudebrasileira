import type { Personalidade } from "../types";
import { carolinaMaria } from "./personalidades/carolina-maria";
import { luizGama } from "./personalidades/luiz-gama";
import { abdiasNascimento } from "./personalidades/abdias-nascimento";
import { manuelaSouza } from "./personalidades/manuela-souza";
import { elizaMaria } from "./personalidades/eliza-maria";

// Ordem preservada: a ordem de inserção define a ordem no grid da home.
export const bancoDeDados: Record<string, Personalidade> = {
  "carolina-maria": carolinaMaria,
  "luiz-gama": luizGama,
  "abdias-nascimento": abdiasNascimento,
  "manuela-souza": manuelaSouza,
  "eliza-maria": elizaMaria,
};

// Quem aparece no banner de destaque da home. Trocar o destaque = mudar esta
// linha. Deve ser uma chave existente em bancoDeDados.
export const DESTAQUE = "eliza-maria";
