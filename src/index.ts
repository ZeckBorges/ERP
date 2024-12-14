import express from 'express';
import { init } from './init';

const app = express();
const port = 3000;

app.use(express.json());

init(app, '/api')

app.use('/', (req, res) =>{
  res.send('Hello World!!')
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
