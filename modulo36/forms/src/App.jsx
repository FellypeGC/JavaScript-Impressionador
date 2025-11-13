import "./App.css"
import React, { useState } from 'react'

export const App = () => {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");

  // Função para lidar com o evento do formulário
  const onSubmit = (event) => {
    event.preventDefault();

    setNome("");
    setCategoria("");
  }

  return (
    <div className="form-container">
      <h1>Cadastro de Curso {nome}</h1>

      <form onSubmit={onSubmit}>
        {/* Campo de entrada de nome do curso */}
        <input 
          type="text" 
          placeholder='Nome do curso'
          value={nome} 
          onChange={(event) => {setNome(event.target.value)}} 
        />
        <span className='error'>O nome do curso é obrigatório</span>

        {/* Campo de data de início */}
        <input type="date" lang='pt_BR' />

        {/* Seleção de Categoria */}
        <select 
          onChange={(event) => setCategoria(event.target.value)} 
          value={categoria}
        >
          <option value="" disabled selected>Escolha a categoria...</option>
          <option value="programacao">Programação</option>
          <option value="design">Design</option>
          <option value="marketing">Marketing</option>
          <option value="outros">Outros</option>
        </select>

        {/* Campo de descrição */}
        <textarea placeholder='Descrição do curso' rows={4} />

        {/* Botão */}
        {/* <button type='submit' onClick={onSubmit}>Cadastrar</button> */}
        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  )
}
