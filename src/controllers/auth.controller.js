const authService = require('../services/auth.service');
const { sendSuccess, sendError } = require('../utils/responses');

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await authService.login(email, password);
    sendSuccess(res, 'Login exitoso', result);
  } catch (error) {
    sendError(res, error.message, 401);
  }
};