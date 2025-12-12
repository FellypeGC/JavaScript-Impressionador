import React from 'react'
import { useContext } from 'react'
import { AlertaContext } from '../context/AlertaContext'

export const BotaoAlert = () => {
  const { mostrarAlerta } = useContext(AlertaContext);
  return (
    <button onClick={() => mostrarAlerta("Você clicou no botão")}>Clique para Alerta</button>
  )
}
