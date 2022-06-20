import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/MainApi/login";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/modules/user";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const dispatch = useDispatch(); 

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await login({email, senha});

      dispatch(setUser({
        token: response.data[0].nome,
        email,
      }));
      alert("Deu certo");
      console.log(response.data);
    } catch (error) {
      alert("Deu algo errado")
    }
  }

  return (
    <main className="container card my-5 p-5">
      <h1>login Psicologo</h1>
      <form onSubmit={submit} >
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
        <div className="mb-3">
        <button type="submit" className="btn btn-primary">Logar</button>
        </div>
      </form>
      <Link to="/lista">ir para lista</Link>
    </main>
  );
}
