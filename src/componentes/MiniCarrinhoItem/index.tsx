import { IItemCarrinho } from "../../interfaces/IItemCarrinho";

interface MiniCarrinhoItemProps {
  item: IItemCarrinho;
}
export default function MiniCarrinhoItem({ item }: MiniCarrinhoItemProps) {
  return (
    <div className="mini-carrinho-item">
      <h5>{item.livro.titulo}</h5>
      <h6>Autoria: {item.livro.autor.nome}</h6>
    </div>
  );
}
