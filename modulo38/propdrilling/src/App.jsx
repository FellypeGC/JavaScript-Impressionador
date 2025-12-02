import React from 'react'
import { A } from './components/A';
import { D } from './components/D';

export const App = () => {
  let nome = "Millene";
  let idade = 28;
  let cidade = "São Paulo";

  const getCidade = () => null;

  return (
    <div>
      <h2>App</h2>
      {/* <A nome={nome} idade={idade} cidade={cidade} /> */}
      <A nome={nome} idade={idade} cidade={getCidade()} />
      {/* <D cidade={cidade} /> */}
    </div>
  )
}
