import React from 'react'
import { useMensagem } from './hooks/useMensagem'
import { Contador } from './components/Contador';
// import 

export const App = () => {
  // const [valorAtual, setAtualizarValor] = useState(valorInicial)
  const mensagem = useMensagem("Marcos");

  return (
    <div>
      <Contador />
      <br />
      <div>{mensagem}</div>
    </div>
  )
}
