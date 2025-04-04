import { Link, useNavigate } from "react-router-dom";
import BotaoNavegacao from "../BotaoNavegacao";
import ModalCadastroUsuario from "../ModalCadastroUsuario";
import logo from "./assets/logo.png";
import usuario from "./assets/usuario.svg";
import "./BarraNavegacao.css";
import { useEffect, useState } from "react";
import ModalLoginUsuario from "../ModalLoginUsuario";
import { ICategoria } from "../../interfaces/ICategoria";
import http from "../../http";

const BarraNavegacao = () => {
  const [modalCadastroAberto, setModalCadastroAberto] = useState(false);
  const [modalLoginAberto, setModalLoginAberto] = useState(false);
  const [categorias, setCategorias] = useState<ICategoria[]>([]);

  useEffect(() => {
    http.get<ICategoria[]>("categorias").then((resposta) => {
      console.log(resposta.data);
      setCategorias(resposta.data);
    });
  }, []);

  let navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  const [usuarioEstaLogado, setUsuarioEstaLogado] = useState<boolean>(
    token != null
  );

  const aoEfetuarLogin = () => {
    setModalLoginAberto(false);
    setUsuarioEstaLogado(true);
  };
  const EfetuarLogout = () => {
    setUsuarioEstaLogado(false);
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="ab-navbar">
      <h1 className="logo">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo da AluraBooks" />
        </Link>
      </h1>
      <ul className="navegacao">
        <li>
          <a href="#!">Categorias</a>
          <ul className="submenu">
            {categorias.map((categoria) => (
              <li key={categoria.id}>
                <Link to={`/categorias/${categoria.slug}`}>
                  {categoria.nome}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <ul className="acoes">
        {!usuarioEstaLogado && (
          <>
            <li>
              <BotaoNavegacao
                texto="Login"
                textoAltSrc="Icone representando um usuário"
                imagemSrc={usuario}
                onClick={() => setModalLoginAberto(true)}
              />
              <ModalLoginUsuario
                aberta={modalLoginAberto}
                aoFechar={() => setModalLoginAberto(false)}
                aoEfetuarLogin={aoEfetuarLogin}
              />
            </li>
            <li>
              <BotaoNavegacao
                texto="Cadastrar-se"
                textoAltSrc="Icone representando um usuário"
                imagemSrc={usuario}
                onClick={() => setModalCadastroAberto(true)}
              />
              <ModalCadastroUsuario
                aberta={modalCadastroAberto}
                aoFechar={() => setModalCadastroAberto(false)}
              />
            </li>
          </>
        )}
        {usuarioEstaLogado && (
          <>
            <li>
              <Link to="/minha-conta/pedidos">Minha Conta</Link>
            </li>
            <li>
              <BotaoNavegacao
                texto="Logout"
                textoAltSrc="Icone representando um usuário"
                imagemSrc={usuario}
                onClick={EfetuarLogout}
              />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default BarraNavegacao;
