import { createContext, useState } from "react";

// Criar o contexto que será usado para compartilhar esss dados
export const UserContext = createContext();

// Criar o Provider que vai envolver os componentes e forncecer os dados do contexto
export function UserProvider({ children }) {
  // Estado que será compartilhado
  const [user, setUser] = useState("Paulo");
  const [contador, setContador] = useState(0);

  return (
    <UserContext.Provider value={{ user, setUser, contador, setContador }}>
      {children}
    </UserContext.Provider>
  )
}
