import { Link, Outlet } from "react-router-dom";
import "./AreaLogada.css";

export default function AreaLogada() {
  return (
    <section className="AreaLogada">
      <div className="menu">
        <ul className="navegacao">
          <li>
            <Link to="/area-logada/pedidos">Pedidios</Link>
          </li>
          <li>
            <Link to="/area-logada/trocas">Trocas</Link>
          </li>
          <li>
            <Link to="/area-logada/cupons">Cupons</Link>
          </li>
          <li>
            <Link to="/area-logada/dados">Seus dados</Link>
          </li>
        </ul>
      </div>
      <div className="conteudo">
        <Outlet />
      </div>
    </section>
  );
}
