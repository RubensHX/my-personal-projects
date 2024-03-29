import { GlobalStyle } from "./styles/global"
import { Header } from '../components/Header/index';
import { Dashboard } from '../components/Dashboard/index';
import { TransactionsTable } from '../components/TransactionsTable/index';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import { NewTransactionModal } from "../components/NewTransactionModal/index";
import { TransactionContext, TransactionsProvider } from "../hooks/UseTransactions";


Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransaction() {
        setIsNewTransactionModalOpen(true);    
    }
    
    function handleCloseNewTransaction() {
        setIsNewTransactionModalOpen(false);
    }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransaction={handleOpenNewTransaction} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransaction} />
      <GlobalStyle />
    </TransactionsProvider>
        
  )
}

