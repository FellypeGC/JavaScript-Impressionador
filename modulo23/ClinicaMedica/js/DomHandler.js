export class DomHandler {
  static atualizarListaPaciente(pacientes) {
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

  static atualizarListaMedico(medicos) {
    const selectMedico = document.getElementById("selectMedico");
    selectMedico.innerHTML = `
      <option value="">--Selecione um médico--</option> 
    `;
    medicos.forEach((medico) => {
      console.log(medico)
      const option = document.createElement("option");
      option.value = medico.nome;
      option.textContent = medico.nome;
      selectMedico.appendChild(option);
    });
  }

  static exibirConsulta(mensagem) {
    const listaConsulta = document.getElementById("listaConsultas");

    // Criar o elemento da lista
    const li = document.createElement("li");
    li.classList.add("consulta-item");
    li.textContent = mensagem;
    listaConsulta.appendChild(li);

    // Criar botão de cancelar
    const btnCancelar = document.createElement("button");
    btnCancelar.textContent = "Cancelar";
    btnCancelar.classList.add("btn-cancelar");

    // Evento para remover a consulta de clicar no botão
    btnCancelar.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(btnCancelar);
    listaConsulta.appendChild(li);
  }
}
// const handler = new DomHandler;
// DomHandler.atualizarListaMedico