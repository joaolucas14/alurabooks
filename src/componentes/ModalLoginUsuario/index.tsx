import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks";
import { useState } from "react";
import imagemPrincipal from "./assets/login.png";
import "./ModalLoginUsuario.css";
import axios from "axios";
import { usePersistirToken } from "../../hooks";

interface PropsModalLoginUsuario {
  aberta: boolean;
  aoFechar: () => void;
  aoEfetuarLogin: () => void;
}

export default function ModalLoginUsuario({
  aberta,
  aoFechar,
  aoEfetuarLogin,
}: PropsModalLoginUsuario) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const setToken = usePersistirToken();

  const aoSubmeterFormular = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const usuario = {
      email,
      senha,
    };
    axios
      .post("http://localhost:8000/public/login", usuario)
      .then((resposta) => {
        sessionStorage.setItem("token", resposta.data.access_token);
        setEmail("");
        setSenha("");
        aoFechar();
        aoEfetuarLogin();
      })
      .catch((erro) => {
        if (erro?.response?.data.message)
          console.log(erro.response.data.message);
        else {
          alert("Aconteceu um erro inesperado ao efetuar seu login");
        }
      });
  };
  return (
    <AbModal aberta={aberta} aoFechar={aoFechar} titulo="LOGIN">
      <section className="corpoModalCadastro">
        <figure>
          <img src={imagemPrincipal} alt="segurando" />
        </figure>
        <form onSubmit={aoSubmeterFormular}>
          <AbCampoTexto
            label="E-mail"
            value={email}
            onChange={setEmail}
          ></AbCampoTexto>
          <AbCampoTexto
            type="password"
            label="Senha"
            value={senha}
            onChange={setSenha}
          ></AbCampoTexto>
          <div className="acoes">
            <AbBotao texto="Fazer Login" />
          </div>
        </form>
      </section>
    </AbModal>
  );
}
