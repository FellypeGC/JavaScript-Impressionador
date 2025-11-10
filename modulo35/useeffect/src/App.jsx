import React, { useEffect, useState } from 'react'
import { Contador } from './components/Contador';

export const App = () => {
  const [mensagem, setMensagem] = useState("");
  const [numero, setNumero] = useState(0);
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    setMensagem(`O número atual é: ${numero}`);
  }, [numero]); // useEffect depender do número

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log(`Rodando a cada segundo ${timer}`);
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //   }
  // }, []);

  return (
    <>
      <h1>UseEffect</h1>
      <p>{mensagem}</p>
      <button onClick={() => setNumero(numero + 1)}>Aumentar</button>

      <h1>UseEffect - Função Limpeza</h1>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "Ocultar Contador" : "Mostrar Contador"}
      </button>
      {isShow && <Contador />}
    </>
  )
}


// Só na montagem - []
// Toda vez que algo muda - [dependencia]