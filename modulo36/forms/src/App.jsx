import "./App.css"
import React from 'react'
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
  nomeCurso: yup
    .string()
    .required("O nome do curso é obrigatório")
    .min(3, "O nome deve conter pelo menos 3 caracteres")
    .max(50, "O nome pode ter no máximo 50 caracteres"),
  data: yup
    .date("Formato de data inválido")
    .required("A data de início é obrigatória")
    .typeError("Insira uma data válida"),
  categoria: yup
    .string()
    .required("Escolha uma categoria")
    .oneOf(["programacao", "design", "marketing", "outros"], "Categoria Inválida"),
  descricao: yup
    .string()
    .required("A descrição é obrigatória")
    .min(10, "A descrição deve ter pelo menos 10 caracteres")
    .max(70, "A descrição deve ter no máximo 70 caracteres"),
});

export const App = () => {
  // useForm - hook principal que inicia o formulário
  // Aqui definimos os valores padrão do formulário e pegamos os métodos necessários
  // control é usado para controlar os componentes/elementos do formulário
  // handleSubmit é uma função que lida com o envio do formulário
  const { control, handleSubmit, reset, register, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      nomeCurso: "",
      data: "",
      categoria: "",
      descricao: "",
    },
    resolver: yupResolver(schema),
  });


  // Função para lidar com o evento do formulário
  // Aqui lapenas logamos os dados no console
  // Em um caso real, você poderia enviar esses dados para o servidor
  const onSubmit = async (data) => {
    // Simula o envio dos dados para um servidor
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);

    reset(); // Reseta os campos do formulário após o envio
  }

  return (
    <div className="form-container">
      <h1>Cadastro de Curso</h1>

      {/* o handleSubmit é passado para o evento onSubmit do formulário, possui o próprio preventDefault embutido */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Campo de entrada de nome do curso */}
        {/* O Controller é usado para conectar o campo de entrada do nome do curso ao React Hook Form */}
        {/* <Controller 
          control={control} // Controla o estado do formulário
          name="nomeCurso" // Nome do campo no formulário
          render={({ field }) => (
            // Render prop que fornece os métodos do React Hook Form,
            // o field contém os métodos necessários como onChange, onBlur, value, ref
            <input type="text" placeholder='Nome do curso' { ...field } />
          )} // Renderiza o campo de entrada e conecta os métodos do React Hook Form
        /> */}
        <input 
          type="text" 
          placeholder='Nome do curso' 
          {...register("nomeCurso", {
            required: "O nome do curso é obrigatório", 
          })}
        />

        {errors.nomeCurso && <span className='error'>{errors.nomeCurso.message}</span>}

        {/* Campo de data de início */}
        <Controller 
          control={control}
          name="data"
          // rules={{ required: true }}
          render={({ field }) => (
            <input type="date" placeholder="Data de início" { ...field } />
          )}
        />

        {errors.data && <span className="error">A data de início é obrigatória</span>}

        {/* Seleção de Categoria */}
        <Controller 
          control={control}
          name="categoria"
          render={({ field }) => (
            <select { ...field }>
              <option value="" disabled>Escolha a categoria...</option>
              <option value="programacao">Programação</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="outros">Outros</option>
            </select>
          )}
        />

        {errors.categoria && <span className='error'>{errors.categoria.message}</span>}

        {/* Campo de descrição */}
        <Controller 
          control={control}
          name="descricao"
          render={({ field }) => (
            <textarea placeholder='Descrição do curso' rows={4} { ...field } />
          )}
        />

        {errors.descricao && <span className='error'>{errors.descricao.message}</span>}

        {/* Botão */}
        {/* <button type='submit' onClick={onSubmit}>Cadastrar</button> */}
        <button type='submit' disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Cadastrar"}
          </button>
      </form>
    </div>
  )
}
