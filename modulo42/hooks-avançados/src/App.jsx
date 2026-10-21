import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  // const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const [scrollPorcentagem, setScrollPorcentagem] = useState(0);

  useEffect(() => {
    // Função é chamada a qualquer momento que o usuário rola o container - Function is called everytime that the user scrolls the container
    function handleScroll() {
      // Extrai propriedades do elemento DOM que temos a referência - Extracts properties from the DOM element that we have the reference
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      // scrollTop: quanto foi rolado a partir do topo - how much was scrolled from the top
      // scrollHeight: altura total do conteúdo interno - total height of the inner content
      // clientHeight: altura visivel do container - visible height of the container

      // Calcular porcentagem rolada com base em uma fórmula - Calculate the scrolled percentage based on a formula
      const totalRolado = (scrollTop / (scrollHeight - clientHeight)) * 100;
      
      // Arredondar o valor e atualizar o estado - Round the value and update the state
      setScrollPorcentagem(Math.round(totalRolado));
    }

    // Acessa o elemento diretamente - Access the element directly
    const elemento = scrollRef.current;

    // Adicionar ouvinte de evento - Add an event listener
    elemento.addEventListener('scroll', handleScroll);

    // Retornar uma função de limpeza - Return a cleaning function
    // Remover o ouvinte de evento e evitar vazamento de memória - Remove the event listener and memory leak
    return () => {
      elemento.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // const focarInput = () => {
  //   inputRef.current.focus()
  // }

  return (
    <div
      style={{
        height: "300px",
        overflowY: "scroll",
        border: "2px solid blue",
      }}
      ref={scrollRef}
    >
      {/* <h2>Exemplo: Foco no Input</h2>

      <input type="text" placeholder="Digite Algo..." ref={inputRef} />

      <button onClick={focarInput}>Focar no Campo</button> */}

      <div style={{ height: "1000px", padding: "1rem" }}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam rem
          blanditiis delectus perspiciatis, harum labore quo atque nisi cumque
          eius natus esse enim, et, reprehenderit ad odit eos earum quod.lore
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, autem ad.
          Reprehenderit numquam voluptate cupiditate inventore nulla est vero ab
          exercitationem quae! Quam ea atque molestiae quos aliquid repellat
          debitis? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Adipisci facere dolorem quibusdam est odit ducimus dolores, error
          voluptas tempora cupiditate eveniet consequuntur eligendi temporibus
          nam numquam alias beatae corrupti ab! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Placeat ratione soluta sapiente eum
          iusto magnam ullam voluptatem nulla odit itaque saepe dolores nesciunt
          porro, facilis odio beatae totam fugiat reprehenderit! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Vero distinctio
          temporibus voluptatem impedit illo eveniet saepe dolorum explicabo
          recusandae eos, reiciendis blanditiis deserunt amet quis quam
          excepturi beatae sapiente repudiandae!
        </p>

        <p
          style={{
            position: "absolute",
            top: 0,
            background: "blue",
            color: "white",
          }}
        >
          Porcentagem rolada: {scrollPorcentagem}%
        </p>
      </div>
    </div>
  );
}

export default App;
