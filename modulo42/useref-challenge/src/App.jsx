import { useRef } from 'react'

function App() {
  const inputRef = useRef(null);

  function printInputWidth() {
    const textInputWidth = inputRef.current.offsetWidth;
    console.log(`The width of this input text is ${textInputWidth}px.`);
  }

  function handleUseRef() {
    inputRef.current.focus();
    printInputWidth();
  }

  return (
    <div>
      <h1>useRef - Challenge</h1>

      <input type="text" ref={inputRef} />
      <button onClick={handleUseRef}>Focus the input</button>
    </div>
  )
}

export default App
