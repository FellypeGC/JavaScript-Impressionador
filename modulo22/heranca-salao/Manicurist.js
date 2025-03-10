import Staff from "./Staff.js";

export default class Manicurist extends Staff {
  constructor(name, monthlySalary, nailDesigns) {
    super(name, "Manicure", monthlySalary);
    this.nailDesigns = nailDesigns;
  }

  getNailDesigns() {
    return `Oferece os designs: ${this.nailDesigns.join(", ")}`;
  }

  getInfo( ) {
    return `${super.getInfo()}. Cria designs de unha como: ${this.nailDesigns.join(", ")}`;
  }
}