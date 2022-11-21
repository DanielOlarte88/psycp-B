const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const Iso3366n1 = sequelize.define(
  "iso3366_1",
  {
    ISO3366_1_alfa2: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    ISO3366_1_alfa3: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    ISO3366_1_numeric: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    ISO3366_1_comun_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ISO3366_1_oficial_iso: {
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

module.exports = Iso3366n1;
