'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const Seasones = [
      {
        trip_id: 1,
        season: 'весна',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 2,
        season: 'лето',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 3,
        season: 'лето',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 4,
        season: 'лето',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 5,
        season: 'лето',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 6,
        season: 'осень',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Seasones', Seasones);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Seasones', null, {});
  },
};
