const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const Body = sequelize.define(
  "body",
  {
    body_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    body_part: {
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

module.exports = Body;
