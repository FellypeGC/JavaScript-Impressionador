import React from 'react'
import { FaUtensils } from "react-icons/fa"
import { OrderAction } from './OrderAction'
import "./OrderListItem.css"

export const OrderListItem = ({ mesa, cliente, pedido }) => {
  const onEdit = () => {
    alert(`Editar pedido mesa`);
  }

  return (
    <div className='order-item'>
      <p className='order-text'>
        <FaUtensils className='icon' />
        <strong>Mesa {mesa} - </strong> {cliente}: {pedido}
      </p>
      {/* Renderize o 4 componente */}
      <OrderAction onEdit={onEdit} />
    </div>
  )
}
