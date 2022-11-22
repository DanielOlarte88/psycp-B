const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const Profes = sequelize.define(
  "profes",
  {
    profes_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    profes_internal_code: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    profes_residence_ubigeo: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    persons_persons_id: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    activate: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Profes;
