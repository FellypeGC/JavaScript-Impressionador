import "./App.css"
import './index.css'
import { useState } from "react"
import { AddToDo } from "./components/AddToDo"
import { TodoList } from "./components/TodoList"

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

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // const toggleTodo = (id) => {

  // }

  return (
    <div className="container">
      <h1 className="app-title">Lista de Tarefas</h1>
      {/* Componente - Input Botão */}
      <AddToDo onAddTodo={addTodo} />
      {/* Componente - Lista de componentes */}
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </div>
  )
}
