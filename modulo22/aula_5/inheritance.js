class Human {
  constructor(name, nationality) {
    this.name = name;
    this.nationality = nationality;
  }
  sayHello() {
    console.log('Olá, meu caro')
  }
};

class F1Pilot extends Human {
  constructor(name, nationality, team, points = 0) {
    super(name, nationality);
    this.team = team;
    this.points = points;
  }

  race() {
    console.log('Vruuuuummmmmm! KkkkkkkkkkKKK');
  }

  sayHello() {
    console.log('Olá, meu caro')
  }
}

const firstPilot = new F1Pilot('Max Verstappen', 'HOL', 'RB Racing', 575);
const secondPilot = new F1Pilot('Sérgio Perez', 'MEX', 'RB Racing', 285);
const thirdPilot = new F1Pilot('Lewis Hamilton', 'ENG', 'Mercedes', 234);

console.log(thirdPilot);
thirdPilot.sayHello();
thirdPilot.race();