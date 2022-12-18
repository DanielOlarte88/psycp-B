const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");
const Users = require("./users");
const BirthSexes = require("./birthSexes");

const Patients = sequelize.define(
  "patients",
  {
    patients_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    patients_internal_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    users_users_id: {
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

Patients.findOneData = function (id) {
  Patients.belongsTo(Users, {foreignKey: "users_users_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  Users.belongsTo(BirthSexes, {foreignKey: "birth_sexes_birth_sexes_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
 
  return Patients.findOne({
    where: {
      patients_id: id,
      activate: 1
    },
    include: [{
      model: Users, attributes: [],
      include: [{
        model: BirthSexes, attributes: [],
      }],
    }],
    attributes: [
      'patients_internal_code',
      [sequelize.fn('concat', 
          sequelize.col('user.users_first_surname'), ' ', 
          sequelize.col('user.users_second_surname'), ', ',
          sequelize.col('user.users_first_name'), ' ',
          sequelize.col('user.users_second_name'), ' ',
          sequelize.col('user.users_third_name')
        ), 'users_fullname'
      ],
      [sequelize.col('user.users_identification_num'), 'users_identification_num'],
      [sequelize.col('user.users_first_name'), 'users_first_name'],
      [sequelize.col('user.users_second_name'), 'users_second_name'],
      [sequelize.col('user.users_third_name'), 'users_third_name'],
      [sequelize.col('user.users_first_surname'), 'users_first_surname'],
      [sequelize.col('user.users_second_surname'), 'users_second_surname'],
      [sequelize.col('user.birth_sexes_birth_sexes_id'), 'birth_sexes_birth_sexes_id'],
      [sequelize.col('user.users_birth_date'), 'users_birth_date'],
      [sequelize.col('user.users_birth_hour'), 'users_birth_hour'],
      [sequelize.col('user.users_residence_iso3366'), 'users_residence_iso3366'],
      [sequelize.col('user.users_residence_department'), 'users_residence_department'],
      [sequelize.col('user.users_residence_province'), 'users_residence_province'],
      [sequelize.col('user.users_residence_district'), 'users_residence_district'],
      [sequelize.col('user.birth_sex.birth_sexes'), 'users_birth_sexes'],
      // Reemplazar a residence
      // [sequelize.col('user.users_birth_iso3366'), 'users_birth_iso3366'],
      // [sequelize.col('user.users_birth_department'), 'users_birth_department'], 
      // [sequelize.col('user.users_birth_province'), 'users_birth_province'],
      // [sequelize.col('user.users_birth_district'), 'users_birth_district'],
    ],
    raw: true,
  })
};

module.exports = Patients;
