import { useEffect, useState } from "react";
import { Professor } from "../../@types/professor";
import { ApiService } from "../../service/ApiService";

export function useIndex() {
  const [professores, setProfessores] = useState<Professor[]>();
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [messagem, setMenssagem] = useState<string>("");
  const [profSelecionado, setProfSelecionado] = useState<Professor | null>(
    null
  );

  useEffect(() => {
    ApiService.get("/professores").then((response) => {
      setProfessores(response.data);
    });
  }, []);

  useEffect(() => {
    limparFormulario();
  }, [profSelecionado]);

  function marcarAula() {
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
            setMenssagem(error.response?.data.message);
          });
      } else {
        setMenssagem("Preencha os dados corretamente");
      }
    }
  }

  function validarDadosAula() {
    return nome.length > 0 && email.length > 0;
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
    marcarAula,
    messagem,
    setMenssagem,
  };
}
