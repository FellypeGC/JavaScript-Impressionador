function resolverBhaskara(a, b, c) {
    const delta = b**2 - 4*a*c;
    const x1 = (-b + calcularRaizQuadrada(delta)) / (2*a);
    const x2 = (-b - calcularRaizQuadrada(delta)) / (2*a);

    console.log(`Os dois valores de X dos pontos da parábola no eixo X são ${x1} e ${x2}`);
    // return a, b, c;
}

function calcularRaizQuadrada(base) {
    return base ** (1 / 2);
};

let valorRaizQuadrada = calcularRaizQuadrada(4)
resolverBhaskara(2, 3, -2);