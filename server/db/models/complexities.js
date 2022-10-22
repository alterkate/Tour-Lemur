'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Complexities extends Model {
    static associate({ Trips }) {
      this.belongsTo(Trips, { foreignKey: 'trip_id' });
    }
  }
  Complexities.init(
    {
      trip_id: DataTypes.INTEGER,
      level: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Complexities',
    },
  );
  return Complexities;
};
