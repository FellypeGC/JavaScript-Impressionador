import React, { useState } from 'react'

export const useTextoDigitado = () => {
  const [mensagem, setMensagem] = useState("");

  const handleInputMensagem = (event) => {
    setMensagem(event.target.value);
  }

  return [mensagem, handleInputMensagem];
}
