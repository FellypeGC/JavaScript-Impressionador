import { Botao } from "./components/Botao"
import { Mensagem } from "./components/Mensagem"
import { Dados } from "./components/Dados"
import { Article } from "./components/Article"


function App() {
  const titulo = "Meu artigo";

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

      <hr />
      <Article 
        text={titulo} 
        author="João Paulo" 
        content="lorem lorem lorem"
        textButton="Like"
        comments="Adorei seu artigo!" 
      />
      <Article 
        text="Segundo artigo"
        author="Lira" 
        content="lorem lorem lorem lorem"
        textButton="Like"
        comments="Adorei seu artigo! Sensacional!" 
      />
    </>
  )
}

export default App
