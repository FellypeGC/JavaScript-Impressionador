// const variavelA = false;
// if (!variavelA) {
//     console.log('condição verdadeira');
// }


//booleanos tem dois possíveis valores: verdadeiro (true) e falso (false)

// Valores Truthy (com cara de verdadeiro) 
// e valores Falsy (com cara de falso)


const variavelFalsy = '0';
// const variavelFalsy = '';
// const variavelFalsy = null;
// const variavelFalsy = undefined;

if (!variavelFalsy) {
    console.log('Executei porque a variável continha um calor com cara de falso');
} else {
    console.log('Só pra não deixar em branco mesmo kkkj')
}
