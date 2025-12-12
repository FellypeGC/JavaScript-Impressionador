import React from 'react'
import { BotaoAlert } from './components/BotaoAlert'
import { OutraMensagem } from './components/OutraMensagem'
import { GlobalFunctionProvider } from './context/GlobalFunctionContext'
import { BotaoConsumer } from './components/BotaoConsumer'

export const App = () => {
  return (
    <div>
      <BotaoAlert />
      <GlobalFunctionProvider>
        <OutraMensagem />
        <BotaoConsumer />
      </GlobalFunctionProvider>
    </div>
  )
}
