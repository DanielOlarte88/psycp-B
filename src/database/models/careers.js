const { sequelize } = require("../../database/config/mysql");
const { DataTypes } = require("sequelize");

const Careers = sequelize.define(
  "careers",
  {
    careers_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    careers: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    careers_area: {
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

// Careers.associate = models => {
//   Careers.belongsTo(models.ProfesStudies, { as: 'careers', onDelete: 'CASCADE', foreignKey: { name: 'careers_id', allowNull: false }});
// }

module.exports = Careers;
