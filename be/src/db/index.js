const Sequelize = require('sequelize');
const { dev } = require('../../env.config');
const requireDirectory = require('require-directory');

const { host, port, username, password, database } = dev.db;

let sequelize;

async function initDB() {
  sequelize = new Sequelize(database, username, password, {
    host,
    port,
    dialect: 'mysql',
  });
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

function syncEntities() {
  const dir = `${process.cwd()}/src/entities`;
  requireDirectory(module, dir);
  sequelize.sync({ force: true });
}

function createEntity(sequelize, entity, attributes, configs = {}, callback) {
  entity.init(attributes, { sequelize, ...configs });
  callback && callback(entity);
  return entity;
}

module.exports = {
  sequelize,
  Model: Sequelize.Model,
  DataTypes: Sequelize.DataTypes,
  initDB,
  syncEntities,
  createEntity: (entity, attributes, configs, cb) =>
    createEntity(sequelize, entity, attributes, configs, cb),
};
