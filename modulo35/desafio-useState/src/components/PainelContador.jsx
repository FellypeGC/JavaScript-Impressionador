import React, { useState } from 'react'
import { Button } from './Button';
import { CampoInput } from './CampoInput';

export const PainelContador = ({ contador, onAumentar, onDobrar, onZerar, onDiminuir, onDiminuirSeguro, onAlterarIncremento, incremento }) => {

  return (
    <div>
      <h1>Contador</h1>
      <p>Valor atual: {contador}</p>

      <Button onClick={onAumentar}>Aumentar</Button> 
      <Button onClick={onDobrar}>Dobrar</Button>
      <Button onClick={onZerar}>Zerar</Button>
      <Button onClick={onDiminuir} disabled={contador === 0}>Dimimuir</Button>
      <Button onClick={onDiminuirSeguro}>Diminuir Seguro</Button>

      <CampoInput tipo="number" placeholder="Digite o valor de incremento" onChange={onAlterarIncremento} />
      <p>Incremento atual: {incremento}</p>

      {/* {contador === 0 ? <Button onClick={onAumentar}>Aumentar valor</Button> :
      <Button onClick={onDobrar}>Dobrar valor</Button>} -> Caso o contador estiver em 0, o aumentar aparecerá no lugar de dobrar (só aparecerá o dobrar se o valor for 1)*/}

      {/* {contador === 0 ? 
        <Button onClick={handleVoltarValorInicial} disabled={true}>Voltar valor inicial</Button> : 
        <Button onClick={handleVoltarValorInicial} disabled={false}>Voltar valor inicial</Button> 
      } */}
    </div>
  )
}
