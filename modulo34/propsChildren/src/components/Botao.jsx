import React from 'react'

export const Botao = ({ text, ...props }) => { //{ text, onClick, type, disabled }
  return (
    <> 
      {/* <button onClick={onClick} type={type} disabled={disabled}>{text}</button> */}
      <button { ...props }>{text}</button>
    </>
  )
}
