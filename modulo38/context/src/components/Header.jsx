import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const Header = () => {
  // Acessa o valor do contexto utilizando userContext
  // const { user } = useContext(UserContext);
  const contextValue = useContext(UserContext);
  console.log(contextValue);

  return (
    <header>Olá, {contextValue.user}!</header>
  )
}

