import React from 'react'
import { FaClipboardList } from "react-icons/fa"
import "./OrderCard.css"
import { OrderList } from './OrderList'

export const OrderCard = () => {
  return (
    <div className='order-card'> 
      <h2 className='title'>
        <FaClipboardList className='icon' />
        Pedidos do Dia
      </h2>

      {/* Renderizar Segundo Componente */}
      <OrderList />
    </div>
  )
}
