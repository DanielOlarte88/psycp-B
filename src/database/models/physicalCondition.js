const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const PhysicalCondition = sequelize.define(
  "physical_condition",
  {
    physical_condition_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    according_weather: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    physical_aspect_physical_aspect_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    physic_complexion_physic_complexion_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    physic_vestment_physic_vestment_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    physic_vestment_color_physic_vestment_color_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    physic_cleanliness_physic_cleanliness_id: {
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

module.exports = PhysicalCondition;
