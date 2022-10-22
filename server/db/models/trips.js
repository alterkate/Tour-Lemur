'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trips extends Model {
    static associate({ Complexities, Photos, Routes }) {
      this.hasOne(Complexities, { foreignKey: 'trip_id' });
      this.hasOne(Photos, { foreignKey: 'trip_id' });
      this.hasMany(Routes, { foreignKey: 'trip_id' });
    }
  }
  Trips.init(
    {
      title: DataTypes.TEXT,
      description: DataTypes.TEXT,
      dates: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Trips',
    }
  );
  return Trips;
};
