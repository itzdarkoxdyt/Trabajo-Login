const Rol = require('../models/rol.model');
const { success, error } = require('../res/response');

exports.createRol = async (req, res) => {
  try {
    const rol = new Rol(req.body);
    await rol.save();
    success(res, 'Rol creado exitosamente', rol, 201);
  } catch (err) {
    error(res, err.message);
  }
};

exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Rol.find();
    success(res, 'Roles obtenidos', roles);
  } catch (err) {
    error(res, err.message);
  }
};