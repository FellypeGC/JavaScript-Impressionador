// const cadeira1 = {
//   nome: 'Cadeira gamer Hashtag',
//   modelo: 'Gamer',
//   ajustavel: true,
//   ergonomica: true,
//   alturaMinimaRecomendada: 150,
//   subirAltura: () => {
//     console.log('Cadeira aumentou seu tamanho');
//   },
// }; //Object Literal

// const cadeira2 = {
//   nome: 'Cadeira de escritório Hashtag',
//   modelo: 'Office',
//   ajustavel: true,
//   ergonomica: true,
//   alturaMinimaRecomendada: 140,
//   subirAltura: () => {
//     console.log('Cadeira aumentou seu tamanho');
//   },
// };

// const cadeira3 = {
//   nome: 'Cadeira de escritório com encosto Hashtag',
//   modelo: 'Office',
//   ajustavel: true,
//   ergonomica: true,
//   alturaMinimaRecomendada: 145,
//   subirAltura: () => {
//     console.log('Cadeira aumentou seu tamanho');
//   },
// };

// const cadeira4 = {
//   nome: 'Cadeira simples Hashtag',
//   modelo: 'Office',
//   ajustavel: true,
//   ergonomica: true,
//   alturaMinimaRecomendada: 145,
//   subirAltura: () => {
//     console.log('Cadeira aumentou seu tamanho');
//   },
// };

class CadeiraHashtag {
  constructor(
    nomeDaCadeira, 
    modeloDaCadeira, 
    isAjustavel,
    ergonomicaDaCadeira, 
    alturaMinimaRecomendadaDaCadeira
  ) {
    this.nome = nomeDaCadeira;
    this.modelo = modeloDaCadeira;
    this.ajustavel = isAjustavel;
    this.ergonomica = ergonomicaDaCadeira;
    this.alturaMinimaRecomendada = alturaMinimaRecomendadaDaCadeira;
  }
  subirAltura() {
    console.log('Cadeira aumentou seu tamanho');
  }
}

const cadeira1 = new CadeiraHashtag(
  'Cadeira Gamer Hashtag', 
  'Gamer', 
  true, 
  true, 
  150
);

const cadeira2 = new CadeiraHashtag(
  'Cadeira de escritório Hashtag', 
  'Office', 
  true, 
  true, 
  140
);

const cadeira3 = new CadeiraHashtag(
  'Cadeira de Escritório com escosto Hashtag', 
  'Gamer', 
  true, 
  true, 
  150
);

const cadeira4 = new CadeiraHashtag(
  'Cadeira Simples Hashtag', 
  'Gamer', 
  true, 
  false, 
  140
);

cadeira3.subirAltura();