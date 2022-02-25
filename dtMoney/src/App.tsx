import { GlobalStyle } from "./styles/global"
import { Header } from '../components/Header/index';
import { Dashboard } from '../components/Dashboard/index';
import { TransactionsTable } from '../components/TransactionsTable/index';



export function App() {

  return (
    <>
      <Header />
      <Dashboard />
      <TransactionsTable />
      <GlobalStyle />
    </>
        
  )
}

