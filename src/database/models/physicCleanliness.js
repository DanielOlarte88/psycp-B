const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const PhysicCleanliness = sequelize.define(
  "physic_cleanliness",
  {
    physic_cleanliness_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cleanliness: {
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

module.exports = PhysicCleanliness;
