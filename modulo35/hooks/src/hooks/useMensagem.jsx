import React, { useState } from 'react'

export const useMensagem = () => {
  const [user, setUser] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleMensagem = (event) => {
    if (event.key === "Enter") {
      setUser(event.target.value);
      setShowMessage(true);
    }
  }

  return { user, showMessage, handleMensagem };
}

// NÃO PODEMOS RETORNAR UM JSX - Retornar um dado - objeto, função, array