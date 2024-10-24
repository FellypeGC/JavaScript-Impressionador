function saudacao(nome) {
  return `Olá, ${nome}`;
}

console.log(saudacao('random guy'));

const pessoa = {
  nome: 'Desconhecido',
  saudacao: function() {
    return `Olá, ${pessoa.nome}`;
  }
}

console.log(pessoa.saudacao());