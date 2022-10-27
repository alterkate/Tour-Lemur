'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seasones extends Model {
    static associate({ Trips }) {
      this.belongsTo(Trips, { foreignKey: 'trip_id' });
    }
  }
  Seasones.init(
    {
      trip_id: DataTypes.INTEGER,
      season: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Seasones',
    }
  );
  return Seasones;
};
