import React from 'react'
import { Botao } from './components/Botao'
import { Input } from './components/Input';

export const App = () => {
  function criarUsuario() {
    alert("Usuário criado!");
  }

  return (
    <>
      <Botao onClick={() => criarUsuario()} text="Criar" />
      <Botao onClick={() => alert("Usuário cancelado!")} text="Cancelar" />
      <Botao text="Atualizar" disabled={true} type="button" />
      <hr />

      <Input 
        type="text" 
        placeholder="Digite Aqui" 
        required={true} 
        id="1" 
        name="inputText" 
      />
      
      <Input 
        type="email" 
        placeholder="Digite seu email" 
        required={false} 
        id="1" 
        name="inputText" 
        disabled={true}
      />
    </>
  )
}
