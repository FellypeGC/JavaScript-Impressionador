import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const Perfil = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h2>Perfil de Usuário</h2>
      <p>Nome: {user}</p>

      <button onClick={() => setUser("Gabriel")}>Trocar Nome</button>
    </>
  )
}
