import React from 'react'


const TransactionsContext = React.createContext();


export function TransactionsProvider({ children }) {

  const [transactions, setTransactions] = React.useState([]);



  React.useEffect(() => {
    // TO DO - Implemente aqui um get para quando carregar a tela, trazer a listagem de transacoes

  }, []);


  async function createTransaction(transactionInput) {
    // TO DO - Implemente aqui o post para salvar transacao, endpoint POST /transactions

  }


  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );


}

export function useTransactions() {
  const context = React.useContext(TransactionsContext);

  return context;
}