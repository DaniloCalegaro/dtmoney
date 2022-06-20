import { useEffect } from "react";
import { api } from "../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    api.get('/transactions')
    .then(response => console.log(response.data))
  }, [])

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desvolvimento de website</td>
            <td className="deposit">R$12000</td>
            <td>Desvolvimento</td>
            <td>20/12/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$1000</td>
            <td>Casa</td>
            <td>17/10/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}