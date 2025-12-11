import React from 'react'
import { ContadorHook } from './components/ContadorHook'
import { ContadorConsumer } from './components/ContadorConsumer'

export const App = () => {
  return (
    <>
      <ContadorHook />
      <ContadorConsumer />
    </>
  )
}
