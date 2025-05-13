const User = require('./user.model');
const Rol = require('./rol.model');

// Relación Usuario-Rol (Muchos a Muchos)
User.belongsToMany(Rol, { through: 'UserRoles' });
Rol.belongsToMany(User, { through: 'UserRoles' });

// Sincronizar relaciones (opcional)
// db.sync({ alter: true }); // Usar con cuidado en producción