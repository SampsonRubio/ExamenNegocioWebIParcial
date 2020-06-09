// Importar los módulos de express.js
const express = require("express");

// Crear un servidor de express
const app = express();

const routes = require("./routes");

app.use("/", routes());

// Inicializar el servidor en un puerto en específico
app.listen(7000, () => {
  console.log("Servidor ejecutandose en el puerto 7000");
});
