const person = {
  name: 'Daniel',
  surname: 'Porto',
  age: 29,
  postalCode: '12345-230',
  // mother: {
  //   name: 'Maria',
  // surname: 'Porto',
  // },
};

console.log(person?.mother?.name);

//truthy - valores que tem CARA DE VERDADEIRO
//falsy - valores que tem CARA DE FALSO - 0, null, undefined e ""

//[] {} NÃO SÃO FALSY

// if(person && person.mother && person.mother.name) {
//   console.log(person.mother.name)
// }
