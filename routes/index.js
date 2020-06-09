const express = require("express");

//Importar controladores
const proyectosController = require("../controllers/proyectoController")

const routes = express.Router();


module.exports = function () {
  routes.get("/", proyectosController.home)
  return routes;
};
