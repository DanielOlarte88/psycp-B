const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const Laterality = sequelize.define(
  "laterality",
  {
    laterality_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    laterality: {
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

module.exports = Laterality;
