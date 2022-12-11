const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const Bond = sequelize.define(
  "bond",
  {
    bond_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    bond: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bond_abbrev: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bond_category: {
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

module.exports = Bond;
