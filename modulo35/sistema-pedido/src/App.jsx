import React from 'react'
import { OrderCard } from './components/OrderCard'
import "./index.css"

export const App = () => {
  return (
    <div className='container'>
      {/* Primeiro componente - Container - Card */}
      <OrderCard />
    </div>
  )
}
