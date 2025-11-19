import "./App.css"
import { AddToDo } from "./components/AddToDo"
import './index.css'

export const App = () => {
  return (
    <div className="container">
      <h1 className="app-title">Lista de Tarefas</h1>
      {/* Componente - Input Botão */}
      <AddToDo onAddTodo={() => {}} />
      {/* Componente - Lista de componentes */}
    </div>
  )
}
