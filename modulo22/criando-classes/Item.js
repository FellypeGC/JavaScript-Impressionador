class Item {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantityAvailable = 0;
  }

  addToInventory = function (quantity) {
    this.quantityAvailable += quantity; // quantityAvailable = quantityAvailable + quantity
  }

  applyOffer = function (discount) {
    return this.price * ((100 - discount) / 100); 
  } 
}

const chair = new Item("Cadeira de Escritório", "Cadeira confortável com ajuste de altura", 150); 
chair.addToInventory(50); 
console.log(chair.quantityAvailable); // 50 
console.log(chair.applyOffer(20)); // 120 
console.log(chair.applyOffer(10)); // 135