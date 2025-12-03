import React from 'react'
import { B } from './B'

export const A = ({ children }) => { // nome, idade, cidade
  return (
    <div>
      <h2>Componente A</h2>
      {/* <B nome={nome} idade={idade} cidade={cidade} /> */}
      {children}
    </div>
  )
}
