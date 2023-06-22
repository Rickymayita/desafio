const { Sequelize }= require('sequelize');
require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize('airline', DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    logging: false,
  });

  // Probar la conexión
async function connectDatabase() {
    try {
      await sequelize.authenticate();
      console.log('Conexión exitosa a la base de datos');
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
      throw new Error('Could not connect to db');
      //setTimeout(connectDatabase, 5000);
    }
  }
  
  // Llamar a la función para probar la conexión
  connectDatabase()
  .catch(error => {
    console.error('Error:', error);
    const response = {
      code: 400,
      errors: 'could not connect to db'
    };
    res.status(response.code).json(response);
  });

  module.exports = sequelize