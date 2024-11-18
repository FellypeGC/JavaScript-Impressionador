/* Você está desenvolvendo uma aplicação que exibe informações de clientes. Cada
cliente pode ter uma lista de endereços, e você precisa extrair as cidades de todos os
endereços. Use encadeamento opcional, operador de coalescência nula e os métodos map e
filter para criar uma lista com as cidades.
Exemplo de Saída: // ['São Paulo', 'Campinas', 'Rio de Janeiro'] */

// ?. Encadeamento opcional
// ?? coalescência nula
const clientes = [ 
  { nome: 'Ana', enderecos: [{ cidade: 'São Paulo' }, {cidade: 'Campinas' }] }, 
  { nome: 'Pedro', enderecos: [{ cidade: 'Rio de Janeiro' }] }, 
  { nome:'Maria', enderecos: [] } 
];

const cidades = clientes
  .filter(cliente => cliente.enderecos?.length > 0) // Filtar clientes que têm endereço
  .map(cliente => cliente.enderecos?.map(endereco => endereco.cidade) ?? []) // Mapeia cada cliente para a lista de cidades
  .reduce((acumulador, cidadesClientes) => acumulador.concat(cidadesClientes), []); // unindo todos os arrays de cidades em um único array

// Refatoração
const cidadesRefator = clientes
  .map(cliente => cliente.enderecos?.map(endereco => endereco.cidade) ?? []) // Mapeia cada cliente para a lista de cidades
  .reduce((acumulador, cidadesClientes) => acumulador.concat(cidadesClientes), []); // unindo todos os arrays de cidades em um único array

console.log(cidadesRefator);