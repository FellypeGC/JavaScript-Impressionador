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

carregarDados();

const medico = new Medico("Dr. Fernando Dias", 40, "123.455.786-90", "Pediatria");
const paciente = new Paciente("Fabio Duarte", 10, "123.456.789-65");

medico.agendarConsulta(paciente, "10/05/2025").then((mensagem) => {
  console.log(mensagem);
})