const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const FiliationInformant = sequelize.define(
  "filiation_informant",
  {
    filiation_informant_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    filiation_informant: {
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

module.exports = FiliationInformant;
