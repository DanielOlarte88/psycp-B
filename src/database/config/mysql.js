const { Sequelize } = require("sequelize");
const NODE_ENV = process.env.NODE_ENV;

const database =
  NODE_ENV === "test"
    ? process.env.MYSQL_DATABASE_TEST
    : process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: "mysql",
  define: {
    freezeTableName: true
  },
});


const dbConnectMySql = async () => {
  try {
    await sequelize.authenticate();
    console.log("MYSQL Conexión correcta");
  } catch (e) {
    console.log("MYSQL Error de Conexión", e);
  }
};

module.exports = { sequelize, dbConnectMySql };











// require('dotenv').config();

// module.exports = {
//   username: process.env.DB_USERNAME || "root",
//   password: process.env.DB_PASSWORD || "",
//   database: process.env.DB_DATABASE || "sequelize",
//   host: process.env.DB_HOST || "localhost",
//   dialect: process.env.DB_DIALECT || "mysql",
//   define: {
//     timestamps: false,

//     // Genera claves foraneas de este tipo user_id en vez de userId
//     underscored: true
//   }
// }
