export const numberOfTires = 4;
const isAirBagNecessary = true;

export default class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.isEngineOn = false
  }

  turnOn() {
    this.isEngineOn = true;
    console.log('Engine is now running.');
  }

  turnOff() {
    this.isEngineOn = false;
    console.log('Engine has been turned off.');
  }

  getDetails() {
    return `${this.year} ${this.brand} ${this.model}`;
  }
};

//CommonJs
//module.exports.Car = Car;

//export  { Car, numberOfTires };
//export default Car;
