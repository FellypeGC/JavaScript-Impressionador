//CommonJs
//const Car = require('./car');

import { Car, numberOfTires } from "./car.js";

function createCars() {
  const car1 = new Car('Toyota', 'Corolla', 2022);
  const car2 = new Car('Honda', 'Civic', 2023);

  car1.turnOn();
  car1.turnOn();

  console.log(car1.getDetails());
  console.log(car2.getDetails());

  car1.turnOff();
  car1.turnOff();

  console.log(numberOfTires)
}

// createCars();

const buttonElement = document.getElementById('run-function');

buttonElement.addEventListener('click', createCars);

//CommonJS