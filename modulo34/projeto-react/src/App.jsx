import { Botao } from "./components/Botao"
import { Mensagem } from "./components/Mensagem"
import { Dados } from "./components/Dados"


function App() {

  return (
    <>
      <Botao text="Clique aqui" />
      <Botao text="Sou um botão" />
      <hr />
      <Mensagem 
        titulo="Titulo da mensagem" 
        conteudo="Mensagem dentro do paragrafo"
      />
      <Mensagem 
        titulo="Segundo título" 
        conteudo="Mais um conteúdo"
      />
    </>
  )
}

export default App
