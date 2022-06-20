import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { RootStore } from "../../store";
import { listarPsicologo } from "../../services/MainApi/psicologo";

interface Psicologo {
  id: number;
  nome: string;
  apresentacao: string;
  email: string;
  senha: string;
}

export default function PiscologoList() {
  const [psicologos, setPsicologos] = useState<Psicologo[]>([]);
  const user = useSelector((store: RootStore) =>store.userReduce);


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await listarPsicologo();

        setPsicologos(response.data);
      } catch (error) {
        alert("Deu algo errado");
      }
    };

    getData();
  }, [setPsicologos]);
  return (
    <main className="container card my-5 p-5">
      <h1>Lista de Psicologos</h1>
      <h1>O email do usuário logado é: {user.email} </h1>
      <ul className="list-group">
        { psicologos.map((psicologo: Psicologo) => (
          <li className="list-group-item">{ psicologo.nome }</li>
        ))}      
      </ul>
    </main>
  );
}
