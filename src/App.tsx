import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Rotas from "./rotas";
import ABApolloCliente from "./componentes/ABApolloCliente";
import CarrinhoProvider from "./contextApi/carrinho";

const queryClient = new QueryClient();

function App() {
  return (
    <ABApolloCliente>
      <CarrinhoProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Rotas />
          </BrowserRouter>
        </QueryClientProvider>
      </CarrinhoProvider>
    </ABApolloCliente>
  );
}

export default App;
