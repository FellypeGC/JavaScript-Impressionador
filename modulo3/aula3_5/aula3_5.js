const primeiraVariavelDoCodigo = 'texto inicial';

function printToConsole() {
    const primeiraVariavelDoCodigo = 'segundo texto';
    function secondFunction(){
        const primeiraVariavelDoCodigo = 'terceiro texto';
        console.log(primeiraVariavelDoCodigo);
    }
    console.log(primeiraVariavelDoCodigo);
    secondFunction();
}

printToConsole();
// console.log(primeiraVariavelDoCodigo);