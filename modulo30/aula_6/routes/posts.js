import express from 'express';
import { posts } from '../data.js';

const router = express.Router();

router
  .route('/')
  .get(registerOnDatabase, (req, res) => {
    //todo um processamento antes de entregar a resposta
    res.status(200).send(posts);
  })
  .post((req, res) => {
    res.status(200).send('novo post criado');
  })
  .put((req, res) => {
    res.status(200).send('Post editado');
  })
  .delete((req, res) => {
    res.status(200).send('Post apagado');
  });

export default router;

function registerOnDatabase(req, res, next) {
  console.log('Acessando o banco de dados');
  console.log('Registrando transação');
  next();
}
