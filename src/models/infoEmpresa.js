const Sequelize = require("sequelize");
const db = require("../config/db-seq");

const Empresa = db.define(
  "infoEmpresa",
  {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: Sequelize.STRING,
    },
    contenido: {
      type: Sequelize.STRING,
    },
  },
  { timestamps: false }
);
module.exports = Empresa;
