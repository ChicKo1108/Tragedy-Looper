const { Model, DataTypes, createEntity } = require('../db');

class CharacterTag extends Model {}

createEntity(CharacterTag, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = CharacterTag;
