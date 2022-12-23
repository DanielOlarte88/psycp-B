const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");
const Bond = require("./bond");

const FiliationInformant = sequelize.define(
  "filiation_informant",
  {
    filiation_informant_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    informant_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bond_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    filiation_filiation_id: {
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

FiliationInformant.findAllData = function (id) {
  FiliationInformant.belongsTo(Bond, {foreignKey: "bond_id", onUpdate: "CASCADE", onDelete: "CASCADE"});

  return FiliationInformant.findAll({
    where: {
      filiation_filiation_id: id,
      activate: 1
    },
    include: [{
      model: Bond, attributes: []
    }],
    attributes: [
      'informant_name',
      [sequelize.col('bond.bond_abbrev'), 'bond_abbrev'],
    ]
  })
};

module.exports = FiliationInformant;
