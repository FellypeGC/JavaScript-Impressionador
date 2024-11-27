import { rename } from "node:fs/promises";

const oldName = process.argv[2] //['node', './script.js']
const newName = process.argv[3];

rename(oldName, newName)
  .then(() => console.log(`Arquivo renomeado para ${newName}`))
  .catch(() => console.log(`Não foi possível renomear o arquivo ${oldName}`));