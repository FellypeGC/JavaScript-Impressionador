import { useState } from 'react';
import { MemoizedDualColorTitle, DualColorTitle } from './DualColorTitle';
import './App.css';

function App() {
  const [titleText, setTitleText] = useState('Novo título da minha página');
  const [booleanState, setBooleanState] = useState(false);
  const changeTitle = () => {
    console.log('Fui executada!');
    console.log('O valor atual de titleText é: ', titleText);
    setTitleText(titleText + 'a');
  };
  return (
    <div>
      <input 
        type="checkbox" 
        checked={booleanState} 
        onChange={() => setBooleanState(!booleanState)} 
      />
      <button onClick={changeTitle}>mudar texto</button>
      <MemoizedDualColorTitle title={titleText} />
    </div>
  );
}

export default App;
