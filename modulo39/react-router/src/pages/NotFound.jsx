import React from 'react'
import { Link } from 'react-router'

export const NotFound = () => {
  return (
    <div>
      <h1>404 - NotFound</h1>
      <p>Ooops! Parece que a rota não existe!</p>

      <Link to="/">Voltar para a página inicial</Link>
    </div>
  )
}
