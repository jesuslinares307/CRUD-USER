const { Sequelize } = require('sequelize');
const config = require('../config');

// Obtén las credenciales de conexión desde el archivo de configuración (config.js)
const { username, password, database, host, dialect } = config.development;

// Crea una instancia de Sequelize con las credenciales de conexión
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

// Exporta la instancia de Sequelize
module.exports = sequelize;
