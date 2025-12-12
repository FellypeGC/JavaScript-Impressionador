import React from 'react'
import { useContext } from 'react'
import { AlertaContext } from '../context/AlertaContext';

export const OutraMensagem = () => {
  const { mostrarAlerta } = useContext(AlertaContext);
  return (
    <>
      <p onClick={() => mostrarAlerta("Você clicou no parágrafo")}>Clique aqui também</p>
    </>
  )
}
