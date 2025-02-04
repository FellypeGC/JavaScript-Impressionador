import { useState } from 'react';
import { Subtitulo } from './subtitulo';
import './App.css';

function App() {
  const [numeroAleatorio, alterarNumeroAleatorio] = useState(Math.random());
  const numero = 27;
  const segundoNumero = 27/3;
  // let numeroAleatorio = Math.random();

  // function trocarNumeroAleatorio() {
  //   numeroAleatorio = Math.random();
  // }

  function trocarNumeroAleatorio() {
    alterarNumeroAleatorio(Math.random());
  }

  return (
    <div>
      <h1>Meu primeiro título com o React {numeroAleatorio}</h1>
      <Subtitulo autor={'Unknown name'} idade={'Unknown age'} altura={'Unknown Height'} />
      <button onClick={trocarNumeroAleatorio}>Novo número aleatório</button>
    </div>
  )
}

export default App
