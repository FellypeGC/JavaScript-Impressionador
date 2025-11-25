import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => {
  return (
    <div className='todo-list'>
      {todos.map((todo) => (
        <TodoItem 
          todo={todo} 
          key={todo.id} 
          onToggle={onToggleTodo} 
          onDelete={onDeleteTodo} 
        />
      ))}
    </div>
  )
}
