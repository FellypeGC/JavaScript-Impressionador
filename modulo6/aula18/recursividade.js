//Árvore de chamadas

// funcaoRecursiva(TEXTO)
// |
// +-- funcaoRecursiva(EXTO)
//         |
//         +--funcaoRecursiva(XTO)
//               |
//               +--funcaoRecursiva(TO)
//                       |
//                       +--funcaoRecursiva(O)

function recursividade(string) {
  if (string === '') {
    return 0; // Condição base
  }
  return 1 + recursividade(string.substring(1)); // Chamada recursiva menos o primeiro caractere
}

console.log(recursividade('Teste'));