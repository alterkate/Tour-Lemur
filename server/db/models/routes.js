'use strict';
const { Model } = require('sequelize');
const trips = require('./trips');
module.exports = (sequelize, DataTypes) => {
  class Routes extends Model {
    static associate({ Trips }) {
      this.belongsTo(Trips, { foreignKey: 'trip_id' });
    }
  }
  Routes.init(
    {
      trip_id: DataTypes.INTEGER,
      day: DataTypes.INTEGER,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Routes',
    }
  );
  return Routes;
};
