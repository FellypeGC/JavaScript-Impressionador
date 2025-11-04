import React from 'react'

export const GlobalEvent = () => {
  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`Você pressionou a tecla ${event.key}`);
    }
  }

  const ativarListener = () => {
    document.addEventListener("keydown", handleOnKeyDown)
  }

  const desativarListener = () => {
    document.removeEventListener("keydown", handleOnKeyDown)
  }

  return (
    <div>
      <p>Pressione a Tecla Enter em qualquer lugar da aplicação.</p>
      <button onClick={ativarListener}>Ativar</button>
      <button onClick={desativarListener}>Desativar</button>
    </div>
  )
}
