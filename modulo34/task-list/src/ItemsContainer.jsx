import { useState } from "react";
import TaskItem from "./TaskItem";

const ItemsContainer = ({ taskList, removeFromList }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="items-container">
      <input 
        type="checkbox" 
        name="border-bottom" 
        id="border-btn" 
        checked={checked} 
        onClick={
          () => {
            setChecked(!checked);
          }
        }
      />
      <label htmlFor="border-bottom">Habilitar Linhas</label>
      {taskList.map((t, i) => (
        <TaskItem 
          task={t} 
          removeFromList={removeFromList} 
          key={`task-item-${i}`} 
          showBorderBottom={checked}
        />
      ))}
    </div>
  )
}

export default ItemsContainer;