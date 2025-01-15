import { AbBotao } from "ds-alurabooks";
import "./Pedidos.css";

export default function Pedidos() {
  return (
    <section className="pedidos">
      <h1>Meus Pedidos</h1>
      <div className="pedido">
        <ul>
          <li>
            Pedido: <strong>123456</strong>
          </li>
          <li>
            Data: <strong>15/01/2025</strong>
          </li>
          <li>
            Valor total: <strong>R$48</strong>
          </li>
          <li>
            Entrega realizada em: <strong>17/01/2025</strong>
          </li>
        </ul>
        <AbBotao texto="Detalhes" />
      </div>
    </section>
  );
}
