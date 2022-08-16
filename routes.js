const express = require('express');

const routes = express.Router();

const UsuariosController = require('./src/controllers/UsuarioController');
const usuariosController = new UsuariosController();

routes.post('/usuarios', usuariosController.login);
routes.get('/usuarios/:id', usuariosController.getUsuarios);
routes.get('/usuarios', usuariosController.getAllUsuarios);

module.exports = routes;