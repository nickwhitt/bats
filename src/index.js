const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');

const PlayerModel = require('./models/player');
const Player = PlayerModel(sequelize, DataTypes);

(async () => {
  await sequelize.sync({ force: true });

  await Player.findOne().then((p) => console.debug(p?.toJSON()));
})();
