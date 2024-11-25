import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mssql',
  host: 'localhost', // Altere para o seu host
  username: 'sa', // Seu nome de usuário
  password: 'senha', // Sua senha
  database: 'NomeDoBanco', // O nome do seu banco de dados
});

export default sequelize;
