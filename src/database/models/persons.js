const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const Persons = sequelize.define(
  "persons",
  {
    persons_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    persons_surnames_order_reverse: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    persons_birth_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    persons_birth_hour: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    persons_birth_iso3366: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    persons_birth_ubigeo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    persons_residence_iso3366: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    persons_residence_ubigeo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    users_users_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    birth_sexes_birth_sexes_id: {
      type: DataTypes.TINYINT,
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

module.exports = Persons;
