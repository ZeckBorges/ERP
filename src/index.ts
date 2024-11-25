import express from 'express';
import { init } from './init';

const app = express();
const port = 3000;

app.use(express.json());

init(app, '/api')
// Usar as rotas
//app.use('/api', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
