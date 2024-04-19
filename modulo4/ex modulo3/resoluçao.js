// Resolução do exercício 1

console.log('----------------------------------------------');
console.log('Resolução Exercício 1');

function mediaAluno() {
    const notaPrimeiraProva =  4;
    const notaSegundaProva = 4;
    const notaTerceiraProva = 4;
    const mediaParaPassar = 5;
    const mediaFinal = (notaPrimeiraProva + notaSegundaProva + notaTerceiraProva) / 3;
    console.log(`A média desse aluno é ${mediaFinal}. O aluno não passou pois a média para passar é ${mediaParaPassar}. Fará a prova final.`);

    console.log('----------------------------------------------');

    // Resolução do exercício 2
    console.log('Resolução Exercício 2');
    function recuperaçao() {
        const media_antes_da_pf = mediaFinal;
        const pf = 10;
        const media_final = (media_antes_da_pf + pf) / 2;
        console.log(`A média final desse aluno é ${media_final}. Passou.`);
    }
    
    recuperaçao();
};

mediaAluno();

// Resolução do exercício 3

console.log('----------------------------------------------');
console.log('Resolução Exercício 3');

function valorTemperatura() {
    const temperaturaCelsius = 34;
    const temperaturaFarenheit = (9/5) * (temperaturaCelsius) + 32;

    console.log(`A temperatura correspondente em Farenheit é de ${temperaturaFarenheit}ºF.`);
}

valorTemperatura();

// Resolução do exercício 4

console.log('----------------------------------------------');
console.log('Resolução Exercício 4');

function calcularValorImposto() {
    const valorEtiqueta = 10;
    const valorTaxaDeImposto = 0.08875
    const imposto = valorEtiqueta * valorTaxaDeImposto;
    const valorTotal = valorEtiqueta + imposto;

    console.log(`O valor a ser pago é R$${valorTotal.toFixed(2)}.`)
}

calcularValorImposto();