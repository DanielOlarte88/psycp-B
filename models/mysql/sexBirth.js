const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const SexBirth = sequelize.define(
  "sex_birth",
  {
    sex_birth_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sex_birth: {
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

module.exports = SexBirth;
