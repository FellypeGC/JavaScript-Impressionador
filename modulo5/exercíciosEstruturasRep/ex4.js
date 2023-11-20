/* Exercício 4: Entrega de Pedidos Pendentes */

const pedidosPendentes = [
  'Hamburguer',
  'Batata Frita',
  'Refrigerante',
  'Milkshake',
  'Nuggets',
]; // indice 0

function realizarEntregas(pedidosPendentes) {
  let pedidoAtual = '';
  console.log('Iniciando Entregas: ');

  while (pedidosPendentes.length > 0) {
    pedidoAtual = pedidosPendentes.shift();
    console.log(`Entregando: ${pedidoAtual}`);
  }
  console.log('Todos os pedidos foram entregues.');
}

realizarEntregas(pedidosPendentes);