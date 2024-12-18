import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis do arquivo .env

const sequelize = new Sequelize(process.env.DB_NAME!, process.env.DB_USER!, process.env.DB_PASS, {
  dialect: 'mssql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialectOptions: {
    instanceName: process.env.DB_INSTANCE || '', // Se necessário
    options: {
      encrypt: true,
      trustServerCertificate: true,
      requestTimeout: 30000,
    },
  },
  pool: {
    max: 50,
    min: 0,
    idle: 10000,
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão bem-sucedida!');
  } catch (error) {
    console.error('Erro ao conectar:', error);
  }
})();

//console.log(sequelize)

export default sequelize;
