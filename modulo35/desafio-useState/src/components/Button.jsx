import React from 'react'

export function Button({ onClick, children, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}>{children}</button>
  )
}
