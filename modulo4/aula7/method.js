let casa = {
    cor: 'white',
    sala: 15,
    cozinha: 10,
    banheiro: 8,
    quarto: 20,
    calcularTamanhoTotalEmM2: function() {
        const tamanhoTotal = this.sala + this.cozinha + this.banheiro + this.quarto;
        console.log(`O tamanho da casa é de ${tamanhoTotal}m²`);
        return tamanhoTotal;
    }
};

casa.calcularTamanhoTotalEmM2();

// function calcularTamanhoTotalCasaEmM2(
//   tamanhoSala,
//   tamanhoCozinha,
//   tamanhoBanheiro, 
//   tamanhoQuarto
// ) {
//     const tamanhoTotal =  tamanhoSala + tamanhoCozinha + tamanhoQuarto + tamanhoBanheiro;
//     console.log(`O tamanho da casa é de ${tamanhoTotal}m²`);
//     return tamanhoTotal;
// }

// calcularTamanhoTotalCasaEmM2(
//     casa.sala, 
//     casa.cozinha, 
//     casa.banheiro, 
//     casa.quarto
// );