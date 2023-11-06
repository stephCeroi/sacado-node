const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sacado', 'root', 'root', {host: 'localhost',dialect: 'postgres'});

try {
  sequelize.authenticate()
           .then(
                  console.log('Connection has been established successfully.') 
                ) 
} catch (error) {
  console.error('Unable to connect to the database:', error);
}