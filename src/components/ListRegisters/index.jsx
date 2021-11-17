import { Container, ContentNoData } from './styles';

import { useTransactions } from '../../contexts/useTransactions';

export function ListRegisters() {

  const { transactions } = useTransactions();

  return (
    <Container>
      <h4>Listagem de Registros:</h4>

      {!Boolean(transactions.length) &&
        <ContentNoData>
          <p>Sem registros Listados</p>
        </ContentNoData>
      }

      {Boolean(transactions.length) &&
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>


            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>
                    {transaction.amount}
                  </td>
                  <td>{transaction.category}</td>
                  <td className={transaction.type}>
                    {transaction.createdAt}
                  </td>
                </tr>
              );
            })}

          </tbody>
        </table>
      }


    </Container>
  )
}