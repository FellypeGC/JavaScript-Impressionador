import React from 'react'
import { ContadorHook } from './components/ContadorHook'
import { ContadorConsumer } from './components/ContadorConsumer'
import { ContadorHookPersonalizado } from './components/ContadorHookPersonalizado'

export const App = () => {
  return (
    <>
      <ContadorHook />
      <ContadorConsumer />
      <ContadorHookPersonalizado />
    </>
  )
}
