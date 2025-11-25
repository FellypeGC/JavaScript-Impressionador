import React from 'react'

export const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className='todo-content'>
      <input 
        type="checkbox" 
        className='todo-checkbox' 
        checked={todo.completed} 
        onChange={() => onToggle()} 
      />

      <span className='todo-text'>{todo.text}</span>

      <button className='delete-button' onClick={() => onDelete()}>Remover</button>
    </div>
  )
}
