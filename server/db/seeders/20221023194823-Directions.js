'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const Directions = [
      {
        trip_id: 1,
        direction: 'Кавказ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 2,
        direction: 'Алтай',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 3,
        direction: 'Алтай',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 4,
        direction: 'Алтай',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 5,
        direction: 'Кавказ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 6,
        direction: 'Алтай',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Directions', Directions);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Directions', null, {});
  }
};
