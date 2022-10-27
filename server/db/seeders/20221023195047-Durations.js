'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const Durations = [
      {
        trip_id: 1,
        duration: 'Длительный',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 2,
        duration: 'Длительный',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 3,
        duration: 'Длительный',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 4,
        duration: 'Длительный',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 5,
        duration: 'Длительный',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 6,
        duration: 'Длительный',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Durations', Durations);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Durations', null, {});
  }
};
