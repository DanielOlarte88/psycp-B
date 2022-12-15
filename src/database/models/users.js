const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const BirthSexes = require("./birthSexes");

const Users = sequelize.define(
  "users",
  {
    users_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    users_first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    users_second_name: {
      type: DataTypes.STRING,
    },
    users_third_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    users_first_surname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    users_second_surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    users_identification_num: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    users_cellphone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    users_license_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    users_terms: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    users_email: {
      type: String,
      allowNull: false,
      unique: true,
    },
    users_password: {
      type: String,
      allowNull: false,
    },
    users_role: {
      type: DataTypes.ENUM(["profes", "patient", "admin"]),
      allowNull: false,
    },
    mental_careers_mental_careers_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    status_licenses_status_licenses_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    users_surnames_order_reverse: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
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
      allowNull: true,
    },
    users_birth_ubigeo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    users_residence_iso3366: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    users_residence_department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    users_residence_province: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    users_residence_district: {
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

Users.findAllData = function () {
  Users.belongsTo(BirthSexes, {
    as: "birthSexCrud",
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
    foreignKey: "birth_sexes_birth_sexes_id",
  });
  return Users.findAll({ 
    include: {
      model: BirthSexes,
      as: "birthSexCrud",
      attributes: ['birth_sexes']
    },
    attributes: ['users_id']
  });
};

module.exports = Users;
