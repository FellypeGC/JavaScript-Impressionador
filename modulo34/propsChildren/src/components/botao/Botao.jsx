import React from 'react'
import styles from "./botao.module.css"

export const Botao = ({ text, ...props }) => { //{ text, onClick, type, disabled }
  return (
    <> 
      {/* <button onClick={onClick} type={type} disabled={disabled}>{text}</button> */}
      {/* <button { ...props }>{text}</button> */}
      <div className={styles.container}>
        <button className={styles.botao}
          //style={
          //{
            // color: "white",
            // cursor: "pointer",
            // padding: "10px",
            // backgroundColor: "red",
            // fontSize: "16px",
          //}
          //</div> }
        >
          {text}
        </button>
      </div>
    </>
  )
}
