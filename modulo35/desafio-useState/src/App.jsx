import React, { useState } from 'react'
import { PainelContador } from './components/PainelContador'
import { useInverterTexto } from './hooks/useInverterTexto'
import { PainelMensagem } from './components/PainelMensagem'


export const App = () => {
  const [contador, setContador] = useState(0);
  const [mensagem, setMensagem] = useState("");
  const [incremento, setIncremento] = useState(1);

  const handleDobrar = () => {
    setContador((prevValue) => prevValue * 2); 
  }

  const handleAumentar = () => {
    setContador((prevValue) => prevValue + incremento); 
  }
  
  const handleZerar = () => {
    setContador(0);
  }

  const diminuir = () => {
    setContador((prevValue) => prevValue - 1); 
  }

  const diminuirSeguro = () => {
    contador > 0 && setContador(contador - 1); 
  }

  const handleIncremento = (e) => {
    const valor = parseInt(e.target.value);
    if (isNaN(valor) || e.target.value.trim() === "") {
      setIncremento(1);
    } else {
      setIncremento(valor);
    }
  }

  // Lógica da Mensagem
  const handleMensagem = (e) => {
    setMensagem(e.target.value);
  }

  const inverterMensagemLoop = () => {
    let textoInvertido = "";
    for (let i = mensagem.length - 1; i >= 0; i--) {
      textoInvertido += mensagem[i];
    }
    setMensagem(textoInvertido);
  }

  const inverterMensagemMetodo = () => {
    setMensagem(mensagem.split("").reverse().join(""));
  }

  return (
    <div>
      <PainelContador 
        contador={contador} 
        onAumentar={handleAumentar} 
        onDobrar={handleDobrar} 
        onZerar={handleZerar} 
        onDiminuir={diminuir}
        onDiminuirSeguro={diminuirSeguro}
        onAlterarIncremento={handleIncremento}
      />

      <PainelMensagem 
        onAlterarMensagem={handleMensagem} 
        mensagem={mensagem} 
        onInverterTexto={inverterMensagemMetodo} 
        onInverterLoop={inverterMensagemLoop} 
      />
    </div>
  )
}
