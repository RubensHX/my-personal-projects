import { GlobalStyle } from "./styles/global"
import { Header } from '../components/Header/index';
import { Dashboard } from '../components/Dashboard/index';
import { TransactionsTable } from '../components/TransactionsTable/index';
import Modal from 'react-modal';
import { useState } from "react";



export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransaction() {
        setIsNewTransactionModalOpen(true);    
    }
    
    function handleCloseNewTransaction() {
        setIsNewTransactionModalOpen(false);
    }

  return (
    <>
      <Header onOpenNewTransaction={handleOpenNewTransaction} />
      <Dashboard />
      <TransactionsTable />
      <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransaction}>
                    <h1>Nova transação</h1>
                </Modal>
      <GlobalStyle />
    </>
        
  )
}

