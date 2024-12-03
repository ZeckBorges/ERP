import { Sequelize } from 'sequelize';
//import dotenv from 'dotenv';

/*dotenv.config(); // Carrega as variáveis do arquivo .env

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
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
});*/

/*const sequelize = new Sequelize('TESTE', 'Ezequiel', '2468', {
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
    authentication: {
      type: 'ntlm',
      options: {
        domain: '', // Se necessário
        userName: '',         // Deixe vazio para Trusted Connection
        password: '',         // Deixe vazio para Trusted Connection
      },
    },
    options: {
      instanceName: 'NTB-EZEQUIEL',
      trustedConnection: true,
      encrypt: false,
      requestTimeout: 30000,
    },
  },
  port: 1433,
});*/


// Note that you must use a SQL Server login -- Windows credentials will not work.
const sequelize = new Sequelize('TESTE ', 'user', '1234', {
    dialect: 'mssql',
    host: 'NTB-EZEQUIEL',
    port: 1433, // Default port
    dialectOptions: {
        instanceName: 'SQLEXPRESS',
        requestTimeout: 30000,
        options: {
          encrypt: true,  // Habilita criptografia
          trustServerCertificate: true  // Ignora a verificação de certificado
      }
    },
    pool: {
        max: 50,
        min: 0,
        idle: 10000
    }
});


(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão bem-sucedida!');
  } catch (error) {
    console.error('Erro ao conectar:', error);
  }
})();

console.log(sequelize)

export default sequelize;
