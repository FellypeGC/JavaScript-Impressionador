// Forma mais antiga (consumer)
import React from 'react'
import { GlobalStateContext } from '../context/GlobalStateContext'

export const ContadorConsumer = () => {
  return (
    <GlobalStateContext.Consumer>
      {({ contador, setContador }) => (
        <div>
          <h2>Contador: {contador}</h2>
          <button onClick={() => setContador((prev) => prev - 1)}>Decrementar</button>
        </div>
      )}
    </GlobalStateContext.Consumer>
  )
}
