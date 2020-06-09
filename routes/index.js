const express = require("express");

const routes = express.Router();

const proyectoController = require("../controller/proyectoController");
module.exports = function () {
  routes.get("/", proyectoController.home);
  routes.post("/amortizacion", proyectoController.calculo);
  return routes;
};
