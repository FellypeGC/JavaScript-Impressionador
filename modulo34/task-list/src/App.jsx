import { useState } from 'react';
import ItemsContainer from './ItemsContainer';
import AddItemsContainer from './AddItemsContainer';
import './App.css';

function App() {
  const [taskList, setTaskList] = useState(['lavar roupa', 'ir ao mercado']);

  const removeFromList = (item) => {
    const newList = [...taskList];
    const itemIndex = newList.indexOf(item);
    newList.splice(itemIndex, 1);
    setTaskList(newList);
  }

  const addToList = (item) => {
    // const newList = [...taskList];
    // newList.push(item);
    // setTaskList(newList);

    setTaskList([...taskList, item]);
  }

  return (
    <div>
      <h1>Minha lista de tarefas do dia</h1>
      <AddItemsContainer addToList={addToList} />
      <ItemsContainer taskList={taskList} removeFromList={removeFromList} />
    </div>
  )
}

export default App;
