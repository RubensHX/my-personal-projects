import { GlobalStyle } from "./styles/global"
import { Header } from '../components/Header/index';
import { Dashboard } from '../components/Dashboard/index';



export function App() {

  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
        
  )
}

