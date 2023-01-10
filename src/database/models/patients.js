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
      'patients_id',
      [sequelize.col('user.users_id'), 'users_id'],
      [sequelize.col('user.users_identification_num'), 'users_identification_num'],
      [sequelize.col('user.users_first_name'), 'users_first_name'],
      [sequelize.col('user.users_second_name'), 'users_second_name'],
      [sequelize.col('user.users_third_name'), 'users_third_name'],
      [sequelize.col('user.users_first_surname'), 'users_first_surname'],
      [sequelize.col('user.users_second_surname'), 'users_second_surname'],
      [sequelize.col('user.birth_sexes_birth_sexes_id'), 'birth_sexes_birth_sexes_id'],
      [sequelize.col('user.users_birth_date'), 'users_birth_date'],
      [sequelize.col('user.users_birth_hour'), 'users_birth_hour'],
      [sequelize.col('user.users_birth_iso3366'), 'users_birth_iso3366'],
      [sequelize.col('user.users_birth_ubigeo'), 'users_birth_ubigeo'],
      [sequelize.col('user.birth_sex.birth_sexes'), 'users_birth_sexes'],
      [sequelize.col('user.users_terms'), 'users_terms'],
    ],
    raw: true,
  })
};

module.exports = Patients;
