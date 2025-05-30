import { Paciente } from "./Paciente.js";
import { Medico } from "./Medico.js";
import { DomHandler } from "./DomHandler.js"

let medicos = [];
let pacientes = [];

async function carregarDados() {
  try {
    const responseMedico = await fetch("./data/medicos.json")
    .then(response => response.json());

    // Criar instância de médico
    medicos = responseMedico.map((medico) => new Medico(
      medico.nome,
      medico.idade,
      medico.cpf,
      medico.especialidade,
    ))
    // console.log(responseMedico);

    const responsePaciente = await fetch("./data/pacientes.json")
    .then(response => response.json());

    // Criar instância de paciente
    pacientes = responsePaciente.map(({ nome, idade, cpf }) => new Paciente(nome, idade, cpf));
    // console.log(responsePaciente);

    // Atualizar a interface
    DomHandler.atualizarListaPaciente(pacientes);
    DomHandler.atualizarListaMedico(medicos);
  } catch (error) {
    console.error("Erro ao carregar os dados: ", error);
  }
}

//Função para formatar a data: YYYY-MM-DD para DD/MM/YYYY
function formataData(data) {
  const [ano, mes, dia] = data.split("-");
  console.log(ano, mes, dia);
  return `${dia}/${mes}/${ano}`;
}


// Função para agendar e exibir a consulta na tela
function agendarConsulta() {
  const pacienteSelecionado = document.getElementById("selectPaciente").value;
  const medicoSelecionado = document.getElementById("selectMedico").value;
  const dataSelecionada = document.getElementById("inputData").value;

  if (!pacienteSelecionado || !medicoSelecionado || !dataSelecionada) {
    alert("Por favor, selecione um paciente, um médico e uma data");
  }

  const paciente = pacientes.find((p) => p.nome === pacienteSelecionado);
  const medico = medicos.find((m) => m.nome === medicoSelecionado);

  if (paciente && medico) {
    medico.agendarConsulta(paciente, formataData(dataSelecionada)).then((mensagem) => {
      DomHandler.exibirConsulta(mensagem);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  carregarDados();
  const btnAgendar = document.getElementById("btnAgendar");
  btnAgendar.addEventListener("click", agendarConsulta);
})

// const medico = new Medico("Dr. Fernando Dias", 40, "123.455.786-90", "Pediatria");
// const paciente = new Paciente("Fabio Duarte", 10, "123.456.789-65");

// medicos.agendarConsulta(pacientes, "10/05/2025").then((mensagem) => {
//   console.log(mensagem);
// })