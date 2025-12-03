import React from 'react'
import { C } from './C'

export const B = ({ children }) => { // nome, idade, cidade
  return (
    <div>
      <h2>Componente B</h2>
      {/* <C nome={nome} idade={idade} cidade={cidade} /> */}
      {children}
    </div>
  )
}
