import { useState } from 'react';
import DualColorTitle from './DualColorTitle';
import './App.css';

function App() {
  const [titleText, setTitleText] = useState('Novo título da minha página');
  const changeTitle = () => {
    console.log('Fui executada!');
    console.log('O valor atual de titleText é: ', titleText);
    setTitleText(titleText + 'a');
  };
  return (
    <div>
      <button onClick={changeTitle}>mudar texto</button>
      <DualColorTitle title={titleText} />
    </div>
  );
}

export default App;
