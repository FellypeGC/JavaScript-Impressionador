async function carregarDados() {
  const responseMedico = await fetch("./data/medicos.json").then(response => response.json());
  console.log(responseMedico);

  const responsePaciente = await fetch("./data/pacientes.json").then(response => response.json());
  console.log(responsePaciente);
}

carregarDados();
