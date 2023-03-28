import "./App.css"
import Button from './Components/Button'
import Frases from './Components/Frases'
import phrases from "./utils/phrases.json"
import { useState } from 'react';
import LogicPhrase from './Components/Logic';
import Particle from "./utils/Particle";
const imgs = [1, 2, 3, 4, 5, 6, 7, 8]
function App() {
  const [valor, setValor] = useState(LogicPhrase(phrases))
  const [numberImg, setNumberImg] = useState(LogicPhrase(imgs))
  const appStyle = {
    backgroundImage: `url('/src/assets/fondo${numberImg}.jpg')`
  }
  return (
    <div style={appStyle} className="App2">
      <Particle />
      <h1 className="App__title">F<span>rases</span> Cé<span>lebres</span></h1>
      <Button setValor={setValor} setNumberImg={setNumberImg} />
      <Frases valor={valor} />
    </div>
  )
}
export default App
