import { useEffect, useState } from "react";
import { Professor } from "../../@types/professor";
import { ApiService } from "../../service/ApiService";

export function useIndex() {
  const [professores, setProfessores] = useState<Professor[]>([]);
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [messagem, setMenssagem] = useState<string>("");
  const [profSelecionado, setProfSelecionado] = useState<Professor | null>(
    null
  );

  useEffect(() => {
    ApiService.get("/professores/").then((resposta) => {
      setProfessores(resposta.data);
    });
  }, []);

  useEffect(() => {
    limparFormulario();
  }, [profSelecionado]);

  function agendarAula() {
    if (profSelecionado) {
      if (validarDadosAula()) {
        ApiService.post(`/professores/${profSelecionado.id}/aulas`, {
          nome,
          email,
        })
          .then(() => {
            setProfSelecionado(null);
            setMenssagem("Cadastrado com sucesso");
          })
          .catch((error) => {
            console.log("erro");
            setMenssagem(error.response?.statusText);
          });
      } else {
        setMenssagem("Preencha os dados corretamente");
      }
    }
  }

  function validarDadosAula() {
    return nome.length > 2 && email.length > 0;
  }

  function limparFormulario() {
    setNome("");
    setEmail("");
  }

  return {
    professores,
    nome,
    setNome,
    email,
    setEmail,
    profSelecionado,
    setProfSelecionado,
    agendarAula,
    messagem,
    setMenssagem,
  };
}
