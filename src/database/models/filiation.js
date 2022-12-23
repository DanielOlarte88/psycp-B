const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");
const FiliationInformant = require("./filiationInformant");
const Bond = require("./bond");

const Filiation = sequelize.define(
  "filiation",
  {
    filiation_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true,
    },
    filiation_residence_iso3366: {
      type: DataTypes.STRING,
    },
    filiation_residence_ubigeo: {
      type: DataTypes.STRING,
    },
    instruction_year_code: {
      type: DataTypes.TINYINT,
    },
    instruction_level_code: {
      type: DataTypes.TINYINT,
    },
    careers_code: {
      type: DataTypes.SMALLINT,
    },
    edu_institution_code: {
      type: DataTypes.SMALLINT,
    },
    occupation_id: {
      type: DataTypes.SMALLINT,
    },
    marital_status_marital_status_id: {
      type: DataTypes.TINYINT,
    },
    filiation_children_num: {
      type: DataTypes.TINYINT,
    },
    religion_religion_id: {
      type: DataTypes.TINYINT,
    },
    // institutions_code: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    institution_hcp_num: {
      type: DataTypes.SMALLINT,
    },
    health_service_code: {
      type: DataTypes.SMALLINT,
    },
    hcp_date: {
      type: DataTypes.DATE,
    },
    institution_referral_code: {
      type: DataTypes.SMALLINT,
    },
    health_service_referral_code: {
      type: DataTypes.SMALLINT,
    },
    socioeconomic_level_description_id: {
      type: DataTypes.TINYINT,
    },
    anamnesis_anamnesis_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    activate: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
      allowNull: false,
    }
  },
  {
    timestamps: true,
  }
);

Filiation.findOneData = function (id) {
  Filiation.hasMany(FiliationInformant, {foreignKey: "filiation_filiation_id", onUpdate: "CASCADE", onDelete: "CASCADE"});
  FiliationInformant.belongsTo(Bond, {foreignKey: "bond_id", onUpdate: "CASCADE", onDelete: "CASCADE"});

  return Filiation.findOne({
    where: {
      anamnesis_anamnesis_id: id,
      activate: 1
    },
    include: [{
      model: FiliationInformant,
      include: [{
        model: Bond,
      }],
    }],
    // attributes: [
    //   [sequelize.col('filiation_informants.bond.bond_abbrev'), 'bond_abbrev'],
    // ],
    // raw: true
  })
};

module.exports = Filiation;
