import React from 'react'
import styles from "./input.module.css"

export const Input = ({ ...props }) => { //{ type, placeholder, disabled, name, id, required }
  return (
    <>
      <div className={styles.container}>
        <input { ...props } />
      </div>
      {/* type={type} 
      placeholder={placeholder} 
      disabled={disabled} 
      name={name} 
      id={id} 
      required={required}  */}
    </>
  )
}
