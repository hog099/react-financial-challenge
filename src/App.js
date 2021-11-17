import React from 'react';
import { BrowserRouter } from "react-router-dom";
import {GlobalStyle} from './styles/globalStyles';

import { TransactionsProvider } from "./contexts/useTransactions";

import Routes from "./routes/index";


function App() {
  return (
    <BrowserRouter>
      <TransactionsProvider>
        <GlobalStyle />
        <Routes />
      </TransactionsProvider>
    </BrowserRouter>
  );
}

export default App;
