import React from 'react'
import styles from "./botao.module.css"

export const Botao = ({ text, ...props }) => { //{ text, onClick, type, disabled }
  return (
    <> 
      {/* <button onClick={onClick} type={type} disabled={disabled}>{text}</button> */}
      {/* <button { ...props }>{text}</button> */}
      <div className='container'>
        <button style={
          {
            color: "white",
            cursor: "pointer",
            padding: "10px",
            backgroundColor: "red",
            fontSize: "16px",
          }}>
          {text}
        </button>
      </div>
    </>
  )
}
