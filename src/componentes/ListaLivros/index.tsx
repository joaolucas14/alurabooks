import { ICategoria } from "../../interfaces/ICategoria";
import CardLivro from "../CardLivro";
import "./ListaLivros.css";
import { AbBotao, AbCampoTexto } from "ds-alurabooks";
import { useState } from "react";
import { useReactiveVar } from "@apollo/client";
import { FiltroLivrosVar, livrosVar } from "../../graphql/livros/state";
import useLivros from "../../graphql/livros/hooks";

interface ListaLivrosProps {
  categoria: ICategoria;
}

export default function ListaLivros({ categoria }: ListaLivrosProps) {
  const [textoDaBusca, setTextoDaBusca] = useState("");

  FiltroLivrosVar({
    categoria,
  });
  const livros = useReactiveVar(livrosVar);

  useLivros();
  return (
    <section>
      <form>
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
