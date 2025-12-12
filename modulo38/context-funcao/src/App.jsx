import React from 'react'
import { BotaoAlert } from './components/BotaoAlert'
import { OutraMensagem } from './components/OutraMensagem'
import { GlobalFunctionProvider } from './context/GlobalFunctionContext'
import { BotaoConsumer } from './components/BotaoConsumer'
import { BotaoControlado } from './components/BotaoControlado'

export const App = () => {
  return (
    <div>
      <BotaoAlert />
      <GlobalFunctionProvider>
        <OutraMensagem />
        <BotaoConsumer />
        <BotaoControlado />
      </GlobalFunctionProvider>
    </div>
  )
}
