import baseAPI from "./config";

interface PsicologoPayload {
  nome: string;
  apresentacao: string;
  email: string;
  senha: string;
}

export function cadastroPsicologo(payload: PsicologoPayload) {
  return baseAPI.post("/psicologos", payload);
}

export function listarPsicologo() {
  return baseAPI.get("/psicologos");
}