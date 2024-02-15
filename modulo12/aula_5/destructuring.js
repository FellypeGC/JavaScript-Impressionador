const person = {
  name: 'Augusto',
  lastName: 'Burle',
  age: 79,
  netWorth: 1_000_000,
};

function printUserInfo({ name, lastName, age, netWorth }) {
  const presentationString = `Esse é o ${name} ${lastName} de ${age} anos de idade, dono de um patrimônio de ${netWorth} reais`;
  console.log(presentationString);
}

printUserInfo(person);

const grades = [8, 9, 4, 6];

const [firstBimesterGrade, secondBimesterGrade, ...banana] = grades;

console.log(`As notas do primeiro bimestre do sujeito levaram à média de ${firstBimesterGrade}`);

console.log(secondBimesterGrade);

console.log(banana);
