import TaskItem from "./TaskItem";

const ItemsContainer = ({ taskList, removeFromList }) => {
  return (
    <div className="items-container">
      {taskList.map((t, i) => (
        <TaskItem 
          task={t} 
          removeFromList={removeFromList} 
          key={`task-item-${i}`} 
        />
      ))}
    </div>
  )
}

export default ItemsContainer;