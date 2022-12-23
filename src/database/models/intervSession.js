const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");
const IntervAccessibility  = require("./intervAccessibility");
const IntervEyeContact  = require("./intervEyeContact");
const IntervSession_IntervAttitude  = require("./intervSession-intervAttitude");
const IntervAttitude  = require("./intervAttitude");

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
    },
    interv_accessibility_interv_accessibility_id: {
      type: DataTypes.STRING,
    },
    interv_eye_contact_interv_eye_contact_id: {
      type: DataTypes.STRING,
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

IntervSession.findAllData = function (id) {
  IntervSession.belongsTo(IntervAccessibility, {foreignKey: "interv_accessibility_interv_accessibility_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  IntervSession.belongsTo(IntervEyeContact, {foreignKey: "interv_eye_contact_interv_eye_contact_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  IntervSession.hasMany(IntervSession_IntervAttitude, {foreignKey: "interv_session_interv_session_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  IntervSession_IntervAttitude.belongsTo(IntervAttitude, {foreignKey: "interv_attitude_interv_attitude_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  
  return IntervSession.findAll({
    where: {
      actual_condition_actual_condition_id: id,
      activate: 1
    },
    include: [
      {model: IntervAccessibility, attributes: []},
      {model: IntervEyeContact, attributes: []},
      {model: IntervSession_IntervAttitude,
        include: [
          {model: IntervAttitude, attributes: ['interv_attitude_id', 'attitude']}
        ],
        attributes: ['interv_session_interv_session_id']
      }
    ],
    attributes: [
      'interv_session_num',
      [sequelize.col('interv_accessibility.accessibility'), 'interv_accessibility_interv_accessibility_id'],
      [sequelize.col('interv_eye_contact.eye_contact'), 'interv_eye_contact_interv_eye_contact_id'],
      // [sequelize.fn('concat', 
      //     sequelize.col('interv_session_has_interv_attitudes.interv_attitude.attitude'), ', ',
      //     sequelize.col('interv_session_has_interv_attitudes.interv_attitude.attitude'), ', ',
      //   ), 'interv_attitude'
      // ],
    ],
  })
};

module.exports = IntervSession;
