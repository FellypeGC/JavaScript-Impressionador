import React from 'react'
import { Botao } from './components/Botao'

export const App = () => {
  function criarUsuario() {
    alert("Usuário criado!");
  }

  return (
    <>
      <Botao onClick={() => criarUsuario()} text="Criar" />
      <Botao onClick={() => alert("Usuário cancelado!")} text="Cancelar" />
    </>
  )
}
