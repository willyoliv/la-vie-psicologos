import { useState, FormEvent } from "react";
import { cadastroPsicologo } from "../../services/MainApi/psicologo";

export default function PsicologoCreate() {
  const [nome, setNome] = useState<string>("");
  const [apresentacao, setApresentacao] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const cadastro = async (event: FormEvent) => {
    event.preventDefault();

    const payload = {
      nome,
      apresentacao,
      email,
      senha,
    };

    try {
      const response = await cadastroPsicologo(payload);

      if (response.status !== 201) {
        return alert("Deu algo errado!");
      }

      alert("Cadastro efetuado com sucesso!");
    } catch (error) {
      return alert("Deu algo errado!");
    }
  };

  return (
    <main className="container card my-5 p-5">
      <h1>Cadastro de Psicologo</h1>
      <form onSubmit={cadastro}>
        <div className="mb-3">
          <label className="form-label" htmlFor="nome">
            Nome
          </label>
          <input
            type="text"
            name="nome"
            id="nome"
            className="form-control"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="apresentacao">
            Apresentação
          </label>
          <textarea
            name="apresentacao"
            id="apresentacao"
            className="form-control"
            value={apresentacao}
            onChange={(event) => setApresentacao(event.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="senha">
            Senha
          </label>
          <input
            type="password"
            name="senha"
            id="senha"
            className="form-control"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">cadastrar</button>
      </form>
    </main>
  );
}
