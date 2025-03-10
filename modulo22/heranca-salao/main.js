import Manicurist from "./Manicurist.js";
import HairStyle from "./HairStyle.js";

// Exemplo de uso
const stylist = new HairStyle("Ana", 3_000, ["Corte", "Coloração", "Penteados"]);
const manicurist = new Manicurist("Beatriz", 2_000, ["Francesinha", "Degradê", "Unha Artística"]);

console.log(stylist.getInfo());
console.log(manicurist.getInfo());
console.log(stylist.getMonthlySalary());

console.log(manicurist.getNailDesigns());