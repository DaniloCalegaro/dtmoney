import { useContext } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {
  const {transactions} = useContext(TransactionsContext)

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src= {incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src= {outcomeImg} alt="Entradas" />
        </header>
        <strong>- R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src= {totalImg} alt="Entradas" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}