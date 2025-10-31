import React from 'react'
import { Botao } from './components/Botao'
import { Mensagem } from './components/Mensagem'

export const App = () => {
  return (
    <>
      <Botao text="Clique aqui" />
      <Botao>
        Clique aqui
      </Botao>
      <hr />
      <Mensagem>
        <h1>Título</h1>
        <p>Eu sou um children</p>
        <p>Olá, Impressionador</p>
        <input type="text" />
      </Mensagem>
      <Mensagem>
        <Botao />
        <button>Botão</button>
        <p>Segundo componente</p>
        <a href="http://" target='_blank' rel='noopener noreferrer'>Ancora</a>
      </Mensagem>
    </>
  )
}
