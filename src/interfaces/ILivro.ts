import { IAutor } from "./IAutor";
import { ITag } from "./ITag";

export interface IOpcaoCompra {
  id: number;
  titulo: string;
  preco: number;
  formatos?: string[];
}

export interface ILivro {
  id: number;
  categoria: number;
  titulo: string;
  slug: string;
  descricao: string;
  isbn: string;
  numeroPaginas: number;
  publicacao: string;
  imagemCapa: string;
  autor: IAutor;
  opcoesCompra: IOpcaoCompra[];
  sobre: string;
  tags: ITag[];
}
