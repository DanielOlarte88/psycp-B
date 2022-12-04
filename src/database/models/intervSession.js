const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const IntervSession = sequelize.define(
  "interv_session",
  {
    interv_session_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    session_num: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    interview_interview_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    interv_accessibility_interv_accessibility_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    interv_eye_contact_interv_eye_contact_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    actual_condition_actual_condition_id: {
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

module.exports = IntervSession;
