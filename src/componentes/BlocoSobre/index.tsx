import "./BlocoSobre.css";
interface BlocoSobreProps {
  titulo?: string;
  corpo?: string;
}

export default function BlocoSobre({ titulo, corpo }: BlocoSobreProps) {
  return (
    <div className="bloco-sobre">
      <h2>{titulo}</h2>
      <p>{corpo}</p>
    </div>
  );
}
