import { selectBestContry as bestCountry } from "./script3.js";

export function addFiveNumbers(n1, n2, n3, n4, n5) {
  return n1 + n2 + n3 + n4 + n5;
}

function selectBestContry() {
  return 'Brasil';
}

// global.console.log('Oiiiii');

console.log(global.addFiveNumbers(1, 2, 3, 4, 5));

// console.log(module);

// const script3 = require('./script3');
// console.log(script3.bestCountry());

console.log(selectBestContry());