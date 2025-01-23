import  { Header } from './components/Header.jsx'
import styles from './App.module.css'
import { Calculadora } from './components/Calculadora.jsx'

function App() {
  

  return (
    <div className={styles.container}>
      <Header/>
      <Calculadora/>
    </div>
  )
}

export default App
