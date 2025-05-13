const { Sequelize } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
  host: config.DB_HOST,
  dialect: 'mysql',
  port: config.DB_PORT || 3306,
  logging: false, // Para evitar logs excesivos
  define: {
    timestamps: true,
    underscored: true
  }
});

// Conexión y sincronización
sequelize.authenticate()
  .then(() => console.log('Conexión a MySQL establecida'))
  .catch(err => console.error('Error de conexión:', err));

// Sincronizar modelos (opcional)
// sequelize.sync({ alter: true }); // Usar con cuidado en producción

module.exports = sequelize;