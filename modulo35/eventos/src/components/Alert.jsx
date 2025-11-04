import React from 'react'

export const Alert = (props) => {
  const handleClick = (event) => {
    if (props.tipo === "semParametro") {
      alert("Mensagem sem parâmetro");
    } else if (props.tipo === "comParametro") {
      alert(`Mensagem via parâmetro: ${props.parametro}`)
    } else if (props.tipo === "comEvent") {
      const valorInput = event.target.previousElementSibling.value;
      // Evento-click -> botão -> elemento anterior que é o input -> valor digitado
      alert(`Você digitou: ${valorInput}`);
    }
  }

  const handleOnMouseOver = () => {
    if (props.tipo === "onMouseOver") {
      alert("Você passou o mouse por cima");
    }
  }

  const handleDoubleClick = () => {
    if (props.tipo === "onDoubleClick") {
      alert("Duplo clique detectado!")
    }
  }

  const handleOnKeyDown = (event) => {
    if (props.tipo === "onKeyDown") {
      if (event.key === "Enter") {
        alert(`Você pressionou a tecla ${event.key}`);
      }
    }
  }

  return (
    <div>
      {(props.tipo === "comEvent" || props.tipo === "onKeyDown") && (
        <input type="text" placeholder='Digite algo aqui...' onKeyDown={handleOnKeyDown} />
      )}

      {props.tipo !== "onKeyDown" && (
        <button 
          onClick={handleClick} 
          onMouseOver={handleOnMouseOver} 
          onDoubleClick={handleDoubleClick} 
        >
          {props.children}
        </button>
      )}
    </div>
  )
}
