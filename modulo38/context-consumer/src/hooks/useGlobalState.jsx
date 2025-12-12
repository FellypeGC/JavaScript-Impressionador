import React, { useContext } from 'react'
import { GlobalStateContext } from '../context/GlobalStateContext'

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);

  if (!context) {
    throw new Error("useGlobalState deve ser usado dentro de um Provider");
  }

  return context;
}


