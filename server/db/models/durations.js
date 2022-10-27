'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Durations extends Model {
    static associate({ Trips }) {
      this.belongsTo(Trips, { foreignKey: 'trip_id' });
    }
  }
  Durations.init(
    {
      trip_id: DataTypes.INTEGER,
      duration: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Durations',
    }
  );
  return Durations;
};
