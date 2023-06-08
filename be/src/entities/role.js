const { Model, DataTypes } = require('../db');

class Role extends Model {}

module.exports = function init(sequelize) {
  Role.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      skills: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: [],
      }
    },
    { sequelize },
  );
};
