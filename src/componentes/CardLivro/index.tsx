import { AbBotao } from "ds-alurabooks";
import { Link } from "react-router-dom";
import { ILivro } from "../../interfaces/ILivro";
import { formatador } from "../../utils/formatador-moeda";
interface CardLivroProps {
  livro: ILivro;
}

const obterValorMinimo = (livro: ILivro) => {
  return Math.min(...livro.opcoesCompra.map((op) => op.preco));
};

export default function CardLivro({ livro }: CardLivroProps) {
  return (
    <div className="livro" key={livro.id}>
      <img src={livro.imagemCapa} alt={livro.descricao} />
      <ul>
        <li>
          <strong>{livro.titulo}</strong>
        </li>
        <li>
          A partir de:{" "}
          <strong>{formatador.format(obterValorMinimo(livro))}</strong>
        </li>
        <li className="link-container">
          <Link to={`/livro/${livro.slug}`}>
            <AbBotao texto="Comprar" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
