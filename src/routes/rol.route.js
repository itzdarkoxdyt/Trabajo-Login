const router = require('express').Router();
const rolController = require('../controllers/rol.controller');

router.post('/', rolController.createRol);
router.get('/', rolController.getAllRoles);

module.exports = router;