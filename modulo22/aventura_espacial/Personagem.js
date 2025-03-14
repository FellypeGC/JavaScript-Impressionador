export class Personagem {
  constructor(nome, energia, poderAtaque, poderDefesa) {
    this.nome = nome;
    this.energia = energia;
    this.poderAtaque = poderAtaque;
    this.poderDefesa = poderDefesa;
  }

  atacar(alvo) {
    const dano = this.poderAtaque - alvo.poderDefesa;
    alvo.energia -= dano > 0 ? dano : 0;
    console.log(`${this.nome} atacou ${alvo.nome} causando ${dano > 0 ? dano : 0} de dano`);
  }
}