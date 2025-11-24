import { useState } from "react"
import "./App.css"
import { AddToDo } from "./components/AddToDo"
import './index.css'

export const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Exemplo de tarefa", completed: false }, 
    { id: 2, text: "Aprender React", completed: false }
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="container">
      <h1 className="app-title">Lista de Tarefas</h1>
      {/* Componente - Input Botão */}
      <AddToDo onAddTodo={addTodo} />
        {todos.map((todo) => todo.text)}
      {/* Componente - Lista de componentes */}
    </div>
  )
}
