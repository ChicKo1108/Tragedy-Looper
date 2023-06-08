const { Model, DataTypes, createEntity } = require('../db');

class Character extends Model {}

createEntity(Character, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  talents: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: [],
  },
  goodwill: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: '友好度',
  },
  paranoia: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: '不安',
  },
  paranoiaLimitation: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: '不安阈值',
  },
  intrigue: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: '密谋',
  },
});

module.exports = Character;
