const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/user.model');

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, config.JWT_SECRET, {
    expiresIn: config.JWT_EXPIRES_IN
  });
};

exports.login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error('Usuario no encontrado');
  
  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw new Error('Credenciales inválidas');
  
  const token = generateToken(user.id);
  
  return {
    user: {
      id: user.id,
      username: user.username,
      email: user.email
    },
    token
  };
};