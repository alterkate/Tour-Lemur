'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Children extends Model {
    static associate({ Trips }) {
      this.belongsTo(Trips, { foreignKey: 'trip_id' });
    }
  }
  Children.init(
    {
      trip_id: DataTypes.INTEGER,
      child: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Children',
    }
  );
  return Children;
};
