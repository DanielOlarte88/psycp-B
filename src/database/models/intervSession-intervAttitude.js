const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");
const { intervSessionModel } = require("../../database/models");
const { intervAttitudeModel } = require("../../database/models");

const IntervSession_IntervAttitude = sequelize.define(
  "interv_session_has_interv_attitude",
  {
    interv_session_interv_session_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,

    },
    interv_attitude_interv_attitude_id: {
      type: DataTypes.TINYINT,
      primaryKey: true,
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

module.exports = IntervSession_IntervAttitude;
