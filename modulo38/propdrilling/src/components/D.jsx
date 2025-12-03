import React from 'react'

export const D = ({ nome, idade, cidade}) => {
  return (
    <div>
      <h2>Componente D</h2>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Cidade: {cidade}</p>
      {/* {cidade ? <p>Cidade: {cidade}</p> : <p>Cidade não encontrada</p>} */}
    </div>
  )
}
