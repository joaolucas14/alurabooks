import { gql, useQuery } from "@apollo/client";
import { ICategoria } from "../../interfaces/ICategoria";
import CardLivro from "../CardLivro";
import "./ListaLivros.css";
import { ILivro } from "../../interfaces/ILivro";

interface ListaLivrosProps {
  categoria: ICategoria;
}

const OBTER_LIVROS = gql`
  query ObterLivros($categoriaId: Int) {
    livros(categoriaId: $categoriaId) {
      id
      slug
      titulo
      imagemCapa
      opcoesCompra {
        id
        preco
      }
    }
  }
`;

export default function ListaLivros({ categoria }: ListaLivrosProps) {
  const { data } = useQuery<{ livros: ILivro[] }>(OBTER_LIVROS, {
    variables: {
      categoriaId: categoria.id,
    },
  });
  // const { data: produtos } = useQuery({
  //   queryKey: ["buscaLivrosPorCategoria", categoria],
  //   queryFn: () => obterProdutosDaCategoria(categoria),
  // });
  return (
    <section className="livros">
      {data?.livros.map((livro) => (
        <CardLivro livro={livro} key={livro.id} />
      ))}
    </section>
  );
}
