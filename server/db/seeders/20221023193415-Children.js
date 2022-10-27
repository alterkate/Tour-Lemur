'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const children = [
      {
        trip_id: 1,
        child: '18+',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 2,
        child: '12+',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 3,
        child: '0+',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 4,
        child: '0+',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 5,
        child: '0+',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 6,
        child: '12+',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Children', children);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Children', null, {});
  },
};
