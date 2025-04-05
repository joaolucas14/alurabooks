import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loader from "../../componentes/Loader";
import TituloPrincipal from "../../componentes/TituloPrincipal";
import { obterCategoriaPorSlug } from "../../http";
import ListaLivros from "../../componentes/ListaLivros";

const Categoria = () => {
  const params = useParams();
  const slug = params.slug;

  const { data: categoria, isLoading } = useQuery({
    queryKey: ["categoriaPorSlug", slug],
    queryFn: () => obterCategoriaPorSlug(slug || ""),
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section>
      <TituloPrincipal texto={categoria?.nome ?? ""} />
      <ListaLivros categoria={categoria!} />
    </section>
  );
};

export default Categoria;
