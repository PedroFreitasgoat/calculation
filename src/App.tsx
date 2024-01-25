import { useState, FormEvent } from 'react'
import './App.css'



interface infoProps{
  title: string;
  gasolina:string | number;
  alcool: string | number;
}

function App() {
  const [gasolinaInput, setGasosilaInput] = useState(0)
  const [alcoolInput, setAlcooInput] = useState(0)
  const [info, setInfo] = useState <infoProps>()

  function calcular(event: FormEvent) {
    event.preventDefault
  }

  let calculo = (alcoolInput / gasolinaInput)

  if(calculo <= 0.7) {
    setInfo({
      title: "Compensa usar ácool",
      gasolina: gasolinaInput,
      alcool: alcoolInput
    })
  }else{
    setInfo({
      title: "Compensa usar ácool",
      gasolina: gasolinaInput,
      alcool: alcoolInput
    })

  return(
    <div>
      <main className='container'>
        <h1 className='title'>Qual a melhor opção</h1>

        <form className='form' onSubmit={calcular}>
          <label>Álcool(preço por litro):</label>
          <input 
          className='input'
          type="number" 
          placeholder='4,90' 
          min="1" 
          step="0.01"
          required
          value={alcoolInput}
          onChange={(e) => setAlcooInput(Number(e.target.value))}
          />


          <label>Gasolina(preço por litro):</label>
          <input 
          className='input'
          type="number" 
          placeholder='4,90' 
          min="1" 
          step="0.01"
          required
          value={gasolinaInput}
          onChange={(e) => setGasosilaInput(Number(e.target.value))}
          />

          <input className='button' type="submit" value="calcular" />
        </form>

       <section className='result'>
        <h2 className='result-title'>Compensa usar Álcool</h2>

        <span>Álcool R$ 4.30</span>
        <span>Gasolina R$ 5.30</span>

       </section>

      </main>
    </div>
  )
}


export default App
