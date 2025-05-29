export class DomHandler {
  static atualixarListaPaciente(pacientes) {
    const selectPaciente = document.getElementById("selectPaciente");
    selectPaciente.innerHTML = `
      <option value="">--Selecione um paciente--</option>
    `;
    pacientes.forEach(paciente => {
      const option = document.createElement("option");
      option.value = paciente.nome;
      option.textContent = paciente.nome;
      selectPaciente.appendChild(option);
    });
  }
  static atualixarListaMedico(medicos) {

  }
}
// const handler = new DomHandler;
// DomHandler.atualixarListaMedico