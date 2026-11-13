import { useRef } from 'react'
import CampoTexto from './components/InputText/CampoTexto';

function App() {
  const inputRef = useRef(null);

  function printInputWidth() {
    const textInputWidth = inputRef.current.offsetWidth;
    console.log(`The width of this input text is ${textInputWidth}px.`);
  }

  function handleInputFocus() {
    inputRef.current.focus();
  }

  function handleUseRef() {
    handleInputFocus();
    printInputWidth();
  }

  return (
    <div>
      <h1>useRef - Challenge</h1>

      <CampoTexto ref={inputRef} placeholder='Digite aqui...' />
      <button onClick={handleUseRef}>Focus the input</button>
    </div>
  )
}

export default App
