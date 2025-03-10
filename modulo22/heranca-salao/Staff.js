// Superclasse - características em comum
export default class Staff {
  constructor(name, role, monthSalary) {
    this.name = name;
    this.role = role;
    this.monthSalary = monthSalary;
  }
  
  getMonthlySalary() {
    return this.monthSalary;
  }

  getInfo() {
    return `${this.name} trabalha como ${this.role}`;
  }
}