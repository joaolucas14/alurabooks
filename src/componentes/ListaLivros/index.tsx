import { ICategoria } from "../../interfaces/ICategoria";
import CardLivro from "../CardLivro";
import "./ListaLivros.css";
import { AbBotao, AbCampoTexto } from "ds-alurabooks";
import { useState } from "react";
import useLivros from "../../graphql/livros/hooks";
import { useReactiveVar } from "@apollo/client";
import { livrosVar } from "../../graphql/livros/state";

interface ListaLivrosProps {
  categoria: ICategoria;
}

export default function ListaLivros({ categoria }: ListaLivrosProps) {
  const [textoDaBusca, setTextoDaBusca] = useState("");
  const livros = useReactiveVar(livrosVar);
  console.log("livros", livros);

  const buscarLivros = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (textoDaBusca) {
      // refetch({
      //   categoriaId: categoria.id,
      //   titulo: textoDaBusca,
      // });
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
        {livros.map((livro) => (
          <CardLivro livro={livro} key={livro.id} />
        ))}
      </div>
    </section>
  );
}
