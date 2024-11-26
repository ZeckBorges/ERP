import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mssql',
  host: 'localhost', // Altere para o host do SQL Server
  database: 'TESTE', // O nome do seu banco de dados
  dialectOptions: {
    options: {
      trustedConnection: true, // Usar a autenticação do Windows
    },
  },
  logging: false, // Opcional, desativa logs no console
  username: '', // Deixe vazio para autenticação do Windows
  password: '', // Deixe vazio para autenticação do Windows
});

export default sequelize;
