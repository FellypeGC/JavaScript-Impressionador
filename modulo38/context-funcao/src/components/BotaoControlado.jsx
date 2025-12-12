import React from 'react'
import { useMensagemControlada } from '../hooks/useMensagemControlada'

export const BotaoControlado = () => {
  const { exibirMensagem } = useMensagemControlada();
  return (
    <button onClick={() => exibirMensagem("Olá, controle!")}>Mensagem Controlada</button>
  )
}
