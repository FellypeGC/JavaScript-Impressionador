import React from 'react'

export const Input = ({ ...props }) => { //{ type, placeholder, disabled, name, id, required }
  return (
    <>
      <input { ...props } />
      {/* type={type} 
      placeholder={placeholder} 
      disabled={disabled} 
      name={name} 
      id={id} 
      required={required}  */}
    </>
  )
}
