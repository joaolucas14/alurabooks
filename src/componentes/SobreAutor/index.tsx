import { useQuery } from "@tanstack/react-query";
import { obterAutor } from "../../http";
import BlocoSobre from "../BlocoSobre";

interface SobreAutorProps {
  autorId: number;
}

export default function SobreAutor({ autorId }: SobreAutorProps) {
  const { data: autor } = useQuery({
    queryKey: ["autor", autorId],
    queryFn: () => obterAutor(autorId),
  });

  return <BlocoSobre titulo="Sobre o Autor" corpo={autor?.sobre} />;
}
