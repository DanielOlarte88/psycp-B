const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

const Institutions = sequelize.define(
  "institutions",
  {
    institutions_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true,
    },
    institutions_order: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    institutions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    institutions_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    institutions_sector: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    institutions_ubigeo: {
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

module.exports = Institutions;
