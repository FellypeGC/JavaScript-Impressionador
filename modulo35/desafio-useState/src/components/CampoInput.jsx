import React from 'react'

export const CampoInput = ({ tipo, placeholder, onChange }) => {
  return (
    <input type={tipo} placeholder={placeholder} onChange={onChange} />
  )
}
