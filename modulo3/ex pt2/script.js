console.log('O resultado do exercício 1:');

const listaNumber = [1, 2, 3, 4, 5];

console.log(listaNumber);

console.log(`O valor do elemento 0 da minha lista é ${listaNumber[0]}`);
console.log(`O valor do elemento 1 da minha lista é ${listaNumber[1]}`);
console.log(`O valor do elemento 2 da minha lista é ${listaNumber[2]}`);
console.log(`O valor do elemento 3 da minha lista é ${listaNumber[3]}`);
console.log(`O valor do elemento 4 da minha lista é ${listaNumber[4]}`);

console.log('O resultado do exerrcício 2:');

const pokemon = {
    nome: 'Zekrom',
    estamina: 205,
    defesa: 211,
    ataque: 275,
    habilidade: 'Sopro do Dragão'
};

console.log(`Meu objeto pokemon possui nome: ${pokemon.nome}`);
console.log(`Meu objeto pokemon possui estamina: ${pokemon.estamina}`);
console.log(`Meu objeto pokemon possui defesa: ${pokemon.defesa}`);
console.log(`Meu objeto pokemon possui ataque: ${pokemon.ataque}`);
console.log(`Meu objeto pokemon possui habilidade: ${pokemon.habilidade}`);

console.log('O resultado do exercício 3:');

let num1 = 133;
let num2 = 45;

console.log(num1 + num2);

const sum = num1 + num2;
console.log(sum);

const sub = num1 - num2;
console.log(sub);

const sub2 = num2 - num1;
console.log(sub2);

const div = num1 / num2;
console.log(div);

const mult = num1 * num2;
console.log(mult);

num1 = 33;
num2 = 222;
console.log(num1 > num2);
console.log(num2 > num1);

num1 = 88;
num2 = 55;
console.log(num1 < num2);
console.log(num2 < num1);

num1 = '123';
num2 = 123;
console.log(num1 === num2);
console.log(num1 == num2); // n é uma boa pratica

num1 = 10;
num2 = 10;
console.log(num1 === num2); 