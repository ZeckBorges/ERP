import express from 'express';
import { init } from './init';

const app = express();
const port = 3000;

app.use(express.json());

init(app, '/api')

app.get('/', (req, res) =>{
  res.send('api rodando!!')
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
