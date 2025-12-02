import React from 'react'
import { A } from './components/A';

export const App = () => {
  let nome = "Millene";
  let idade = 28;
  let cidade = "São Paulo";

  return (
    <div>
      <h2>App</h2>
      <A nome={nome} idade={idade} cidade={cidade} />
    </div>
  )
}
