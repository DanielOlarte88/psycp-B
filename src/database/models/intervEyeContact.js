const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const IntervEyeContact = sequelize.define(
  "interv_eye_contact",
  {
    interv_eye_contact_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    interv_eye_contact: {
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

module.exports = IntervEyeContact;
