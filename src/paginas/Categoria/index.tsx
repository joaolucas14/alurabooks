import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loader from "../../componentes/Loader";
import TituloPrincipal from "../../componentes/TituloPrincipal";
import { obterCategoriaPorSlug } from "../../http";

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
    </section>
  );
};

export default Categoria;
