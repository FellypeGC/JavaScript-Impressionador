import express from 'express';
import helmet from 'helmet';
import usersRouter from './routes/users.js';
import postsRouter from './routes/posts.js';

const app = express();

app.use(registerRequest);
app.use(express.json());
app.use(helmet());
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.get('/', (req, res) => {
  res.status(200).send('Olá, Impressionador!');
});

app.listen(5000, () => console.log('api rodando com sucesso'));

function registerRequest(req, res, next) {
  console.log('Nova solicitação http');
  console.log('Endpoint solicitado: ', req.url);
  next();
}
