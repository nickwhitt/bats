const model = (sequelize, DataTypes) => {
  return sequelize.define('Batter', { name: DataTypes.STRING }, {});
};

module.exports = model;
