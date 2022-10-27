'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Directions extends Model {
    static associate({ Trips }) {
      this.belongsTo(Trips, { foreignKey: 'trip_id' });
    }
  }
  Directions.init(
    {
      trip_id: DataTypes.INTEGER,
      direction: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Directions',
    }
  );
  return Directions;
};
