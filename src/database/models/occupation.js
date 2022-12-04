const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const Occupation = sequelize.define(
  "occupation",
  {
    occupation_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true,
    },
    occupation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activate: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
      allowNull: false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = Occupation;
