import baseAPI from "./config";

interface LoginPayload {
  email: string;
  senha: string;
}

// Função original da aula
// export function login(payload: LoginPayload){
//   return baseAPI.post("/login", payload);
// }

export function login(payload: LoginPayload) {
  return baseAPI.get(`/psicologos?email=${payload.email}&senha=${payload.senha}`);
}