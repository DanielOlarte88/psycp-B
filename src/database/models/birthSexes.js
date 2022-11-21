const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const BirthSexes = sequelize.define(
  "birth_sexes",
  {
    birth_sexes_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    birth_sexes: {
      type: DataTypes.STRING,
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

module.exports = BirthSexes;
