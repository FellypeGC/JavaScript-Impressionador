import React from 'react'
import { FaClipboardList } from "react-icons/fa"
import "./OrderCard.css"

export const OrderCard = () => {
  return (
    <div className='order-card'> 
      <h2 className='title'>
        <FaClipboardList className='icon' />
        Pedidos do Dia
      </h2>
    </div>
  )
}
