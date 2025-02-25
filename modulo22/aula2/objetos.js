const student = {
  name: "Carlos Silva",
  age: 28,
  modality: "Musculação",
  active: true,
  sesssions: 12, // Quantidade de sessões restantes
  progress: ["Treino A", "Treino B", "Treino C"],
  personalTrainer: {
    name: "João Santos",
    experience: "10 anos",
  },
};

// Acessar propriedades 
console.log(student.name);
console.log(student.progress);
console.log(student.personalTrainer.name);

// Adiciona métodos - funcionalidades
student.useSession = function () {
  if (this.sesssions > 0) {
    this.sesssions -= 1; // Reduza 1
    console.log("Sessão utilizada: " + `Sessões restantes ${this.sesssions}`);
  } else {
    console.log("Não há mais sessões restantes. Renove o seu plano!");
  }
};

student.useSession();
student.useSession();