import { createContext, ReactElement, useContext } from "react";
import { ICarrinho } from "../../interfaces/ICarrinho";
import useCarrinho, {
  useAdicionarItem,
  useRemoverItem,
} from "../../graphql/carrinho/hooks";
import { IItemCarrinho } from "../../interfaces/IItemCarrinho";

export interface ICarrinhoContext {
  carrinho?: ICarrinho;
  adicionarItemCarrinho: (item: IItemCarrinho) => void;
  removerItemCarrinho: (item: IItemCarrinho) => void;
}

export const CarrinhoContext = createContext<ICarrinhoContext>({
  adicionarItemCarrinho: () => null,
  removerItemCarrinho: () => null,
});

interface CarrinhoProviderProps {
  children: ReactElement;
}

const CarrinhoProvider = ({ children }: CarrinhoProviderProps) => {
  const { data } = useCarrinho();
  const [adicionaItem] = useAdicionarItem();
  const [removerItem] = useRemoverItem();
  const adicionarItemCarrinho = (item: IItemCarrinho) => {
    adicionaItem({
      variables: {
        item: {
          livroId: item.livro.id,
          opcaoCompraId: item.opcaoCompra.id,
          quantidade: item.quantidade,
        },
      },
    });
  };

  const removerItemCarrinho = (item: IItemCarrinho) => {
    removerItem({
      variables: {
        item: {
          livroId: item.livro.id,
          opcaoCompraId: item.opcaoCompra.id,
          quantidade: item.quantidade,
        },
      },
    });
  };

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho: data?.carrinho,
        adicionarItemCarrinho,
        removerItemCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinhoContext = () => {
  return useContext<ICarrinhoContext>(CarrinhoContext);
};

export default CarrinhoProvider;
