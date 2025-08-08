import styles from "./App.module.css"

import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Header } from "./components/Header"

export default function App() {
  function handleRestartGame() {
    alert("Reiniciar o jogo")
  }
  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
        
        <Tip tip="Uma das linguagens de programação mais utilizadas" />

        <Letter value="R" />
        <Letter value="e" />
        <Letter value="a" />
        <Letter value="c" />
        <Letter value="t" />
      </main>
    </div>
  )
}