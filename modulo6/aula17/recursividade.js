function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1; 
  } else {
    return n * fatorial(n - 1); 
  }
}

console.log(fatorial(5)); 

//Árvore de chamadas

// factorial(5)
// |
// +-- factorial(4)
//         |
//         +--factorial(3)
//               |
//               +--factorial(2)
//                       |
//                       +--factorial(1)
//                             |
//                             +--factorial(0)