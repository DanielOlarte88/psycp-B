const { sequelize } = require("../config/mysql")
const { DataTypes } = require("sequelize");

const Users = sequelize.define(
  "users",
  {
    users_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    users_surnames_order_reverse: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    users_birth_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    users_birth_hour: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    users_birth_iso3366: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    users_birth_ubigeo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    users_residence_iso3366: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    users_residence_ubigeo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth_sexes_birth_sexes_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    persons_persons_id: {
      type: DataTypes.INTEGER,
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

module.exports = Users;
