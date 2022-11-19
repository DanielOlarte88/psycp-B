const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const MentalCareers = sequelize.define(
  "mental_careers",
  {
    mental_careers_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    mental_careers: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activate:{
      type: DataTypes.TINYINT,
      defaultValue: 1,
      allowNull: false
    }
  },
  {
    timestamps: true,
  }
);

module.exports = MentalCareers;
