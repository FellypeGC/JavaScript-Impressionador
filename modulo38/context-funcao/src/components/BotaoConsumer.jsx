import React from 'react'
import { GlobalFunctionContext } from '../context/GlobalFunctionContext'

export const BotaoConsumer = () => {
  return (
    <GlobalFunctionContext.Consumer>
      {({ mostrarMensagem, logMensagem }) => (
        <div>
          <button onClick={() => logMensagem("Mensagem logada via Consumer")}>
            Logar Mensagem com Consumer
          </button>

          <p onClick={() => mostrarMensagem("Mensagem logada via Consumer")}>Mostrar mensagem</p>
        </div>
      )}
    </GlobalFunctionContext.Consumer>
  )
}
