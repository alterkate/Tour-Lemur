'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trips extends Model {
    static associate({
      Complexities,
      Photos,
      Routes,
      Children,
      Directions,
      Durations,
      Seasones,
    }) {
      this.hasOne(Complexities, { foreignKey: 'trip_id' });
      this.hasOne(Photos, { foreignKey: 'trip_id' });
      this.hasMany(Routes, { foreignKey: 'trip_id' });
      this.hasOne(Children, { foreignKey: 'trip_id' });
      this.hasOne(Directions, { foreignKey: 'trip_id' });
      this.hasOne(Durations, { foreignKey: 'trip_id' });
      this.hasOne(Seasones, { foreignKey: 'trip_id' });
    }
  }
  Trips.init(
    {
      title: DataTypes.TEXT,
      description: DataTypes.TEXT,
      start: DataTypes.DATEONLY,
      end: DataTypes.DATEONLY,
      price: DataTypes.INTEGER,
      visible: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Trips',
    }
  );
  return Trips;
};
