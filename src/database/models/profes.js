const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Users = require("./users");

const Profes = sequelize.define(
  "profes",
  {
    profes_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    profes_internal_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profes_residence_ubigeo: {
      type: DataTypes.STRING,
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

Profes.findOneData = function (id) {
  Profes.belongsTo(Users, {foreignKey: "users_users_id", onUpdate: "CASCADE", onDelete: "CASCADE"});

  return Profes.findOne({
    where: {
      profes_id: id,
      activate: 1
    },
    include: [
      {
        model: Users,
        attributes: []
      }
    ],
    attributes: [
      'profes_internal_code', 'profes_id',
      [sequelize.col('user.users_id'), 'users_id'],
      [sequelize.col('user.users_first_surname'), 'users_first_surname'],
      [sequelize.col('user.users_second_surname'), 'users_second_surname'],
      [sequelize.col('user.users_first_name'), 'users_first_name'],
      [sequelize.col('user.users_second_name'), 'users_second_name'],
      [sequelize.col('user.users_third_name'), 'users_third_name'],
      [sequelize.col('user.mental_careers_mental_careers_id'), 'mental_careers_mental_careers_id'],
      [sequelize.col('user.status_licenses_status_licenses_id'), 'status_licenses_status_licenses_id'],
      [sequelize.col('user.users_license_num'), 'users_license_num'],
      [sequelize.col('user.birth_sexes_birth_sexes_id'), 'birth_sexes_birth_sexes_id'],
      [sequelize.col('user.users_birth_date'), 'users_birth_date'],
      [sequelize.col('user.users_birth_hour'), 'users_birth_hour'],
      [sequelize.col('user.users_residence_iso3366'), 'users_residence_iso3366'],
      [sequelize.col('user.users_residence_department'), 'users_residence_department'],
      [sequelize.col('user.users_residence_province'), 'users_residence_province'],
      [sequelize.col('user.users_residence_district'), 'users_residence_district'],
      [sequelize.col('user.users_residence_ubigeo'), 'users_residence_ubigeo'],
    ]
  })
};

module.exports = Profes;
