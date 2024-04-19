function calculateSquareRoot(radicand) {
    return radicand ** (1 / 2);
};

function calculatePythagoras(side1, side2) {
    const sum = side1 ** 2 + side2 ** 2;
    return calculateSquareRoot(sum);
};

function add(part1, part2) {
    return part1 + part2;
}

console.log(process.argv);

const userInputs = process.argv.splice(2);

const side1 = add(Number(userInputs[0]), Number(userInputs[1]));
const side2 = add(Number(userInputs[2]), Number(userInputs[3]));

console.log(userInputs);

console.log(`A hipotenusa de um triangulo de lados ${side1} e ${side2} é: ${calculatePythagoras(side1, side2)}`);