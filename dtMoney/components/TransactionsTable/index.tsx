import { useEffect } from "react";
import { api } from "../../src/services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th className="title">Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
          <tbody>
            <tr>
              <td className="title">Perda Carro</td>
              <td className="withdraw">-R$ 500,00</td>
              <td>Veículo</td>
              <td>25/02/21</td>
            </tr>

            <tr>
              <td className="title">Economia Carro</td>
              <td className="deposit">R$ 500,00</td>
              <td>Veículo</td>
              <td>25/02/21</td>
            </tr>
          </tbody>
        </thead>
      </table>
    </Container>
  );
}
