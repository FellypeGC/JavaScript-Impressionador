import React from 'react'
import { CampoInput } from './CampoInput'
import { Button } from './Button'

export const PainelMensagem = ({ mensagem, onAlterarMensagem, onInverterTexto, onInverterLoop }) => {
  return (
    <div>
      <h2>Caixa de mensagem</h2>
      <CampoInput placeholder="Digite uma mensagem" onChange={onAlterarMensagem} />
      <Button onClick={onInverterTexto}>Inverter Mensagem</Button>
      <Button onClick={onInverterLoop}>Inverter Loop</Button>
      <p>Sua Mensagem: {mensagem}</p>
    </div>
  )
}
