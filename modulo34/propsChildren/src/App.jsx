import React from 'react'
import { Botao } from "./components/botao/Botao"
import { Mensagem } from './components/Mensagem'
import "./style.css"
import "./global.css"
import { Input } from './components/input/Input'

export const App = () => {
  const ativo = true;

  return (
    <div className='container'>
      <h1>Bem vindo às aulas de CSS no React</h1>
      <button id='botao-principal'>Clique Aqui</button>
      <hr />
      <Botao text="Clique" />
      <hr />
      <Input type="text" />
      <hr />
      <Mensagem>
        <p style={{ color:ativo ? "green" : "gray" }}>
          {/* Operador ternário - if/else */}
          Status: {ativo ? "Ativo" : "Inativo" } 
        </p>
      </Mensagem>
    </div>
  )
}
