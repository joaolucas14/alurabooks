import { useQuery } from "@tanstack/react-query";
import { ICategoria } from "../../interfaces/ICategoria";
import { obterProdutosDaCategoria } from "../../http";
import CardLivro from "../CardLivro";
import "./ListaLivros.css";

interface ListaLivrosProps {
  categoria: ICategoria;
}

export default function ListaLivros({ categoria }: ListaLivrosProps) {
  const { data: produtos } = useQuery({
    queryKey: ["buscaLivrosPorCategoria", categoria],
    queryFn: () => obterProdutosDaCategoria(categoria),
  });
  console.log(produtos);
  return (
    <section className="livros">
      {produtos?.map((livro) => (
        <CardLivro livro={livro} key={livro.id} />
      ))}
    </section>
  );
}
