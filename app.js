require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const morganBody = require("morgan-body");
const openApiConfigration = require("./src/v1/docs/swagger");
const loggerStream = require("./src/database/utils/handleLogger");
const {dbConnectMySql} = require("./src/database/config/mysql");
const app = express();

const ENGINE_DB = process.env.ENGINE_DB;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

morganBody(app, {
  noColors: true,
  stream: loggerStream,
  skip: function (req, res) {
    return res.statusCode < 400;
  },
});

const port = process.env.PORT || 4000;

/**
 * Definir ruta de documentación
 */
app.use('/documentation',
 swaggerUI.serve, 
 swaggerUI.setup(openApiConfigration))

/**
 * Aqui invocamos a las rutas
 */
app.use("/api", require("./src/v1/routes"));

if(NODE_ENV !== 'test'){
  app.listen(port);
}

dbConnectMySql();

module.exports = app;
