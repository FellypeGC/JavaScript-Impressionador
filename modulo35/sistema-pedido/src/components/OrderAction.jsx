import React from 'react'
import { Button } from './Button'
import { FaEdit } from 'react-icons/fa'

export const OrderAction = ({ onEdit }) => {
  return (
    <div>
      {/* Componente 5 - Button */}
      <Button onClick={onEdit}>
        <FaEdit />
        Editar
      </Button>
    </div>
  )
}
