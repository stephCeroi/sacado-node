const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sacado', 'postgres', 'root', 
                                  {
                                    host: 'localhost',
                                    dialect: 'postgres',
                                    logging: false,//passer a true pour voir les différentes requêtes effectuées par l'ORM
                                  });
try {
      sequelize.authenticate()
              .then(
                      console.log('Connection has been established successfully.') 
                    ) 
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }

 

module.exports = sequelize ;