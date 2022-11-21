const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const Iso3366n2 = sequelize.define(
  "iso3366_2",
  {
    ISO3366_2_alfa2: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    ISO3366_2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ISO3366_1_ISO3366_1_alfa2: {
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

module.exports = Iso3366n2;
