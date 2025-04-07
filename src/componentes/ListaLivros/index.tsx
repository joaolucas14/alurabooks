import { gql, useQuery } from "@apollo/client";
import { ICategoria } from "../../interfaces/ICategoria";
import CardLivro from "../CardLivro";
import "./ListaLivros.css";
import { ILivro } from "../../interfaces/ILivro";
import { AbBotao, AbCampoTexto } from "ds-alurabooks";
import { useState } from "react";

interface ListaLivrosProps {
  categoria: ICategoria;
}

const OBTER_LIVROS = gql`
  query ObterLivros($categoriaId: Int, $titulo: String) {
    livros(categoriaId: $categoriaId, titulo: $titulo) {
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
  const [textoDaBusca, setTextoDaBusca] = useState("");
  const { data, refetch } = useQuery<{ livros: ILivro[] }>(OBTER_LIVROS, {
    variables: {
      categoriaId: categoria.id,
      titulo: textoDaBusca,
    },
  });
  // const { data: produtos } = useQuery({
  //   queryKey: ["buscaLivrosPorCategoria", categoria],
  //   queryFn: () => obterProdutosDaCategoria(categoria),
  // });

  const buscarLivros = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (textoDaBusca) {
      refetch({
        categoriaId: categoria.id,
      });
    }
  };
  return (
    <section>
      <form onSubmit={buscarLivros}>
        <AbCampoTexto
          value={textoDaBusca}
          onChange={setTextoDaBusca}
          placeholder="Digite o título"
        />
        <div>
          <AbBotao texto="Buscar" />
        </div>
      </form>
      <div className="livros">
        {data?.livros.map((livro) => (
          <CardLivro livro={livro} key={livro.id} />
        ))}
      </div>
    </section>
  );
}
