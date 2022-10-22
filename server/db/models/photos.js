'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photos extends Model {
    static associate({ Trips }) {
      this.belongsTo(Trips, { foreignKey: 'trip_id' });
    }
  }
  Photos.init(
    {
      trip_id: DataTypes.INTEGER,
      main: DataTypes.TEXT,
      photo1: DataTypes.TEXT,
      photo2: DataTypes.TEXT,
      photo3: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Photos',
    }
  );
  return Photos;
};
