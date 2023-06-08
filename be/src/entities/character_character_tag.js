const { Model, DataTypes, createEntity } = require('../db');
const Character = require('./character');
const CharacterTag = require('./character_tag');

class CharacterCharcterTag extends Model {}

createEntity(
  CharacterCharcterTag,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    tableName: 'charcter_charctertag',
    indexes: [
      {
        unique: true,
        fields: ['characterId', 'characterTagId'],
      },
    ],
  },
);
Character.belongsToMany(CharacterTag, { through: CharacterCharcterTag });
CharacterTag.belongsToMany(Character, { through: CharacterCharcterTag });

module.exports = CharacterCharcterTag;
