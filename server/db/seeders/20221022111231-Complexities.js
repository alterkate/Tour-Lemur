'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const level = [
      {
        trip_id: 1,
        level: 'Подойдет всем желающим, проживание в хостелах',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 2,
        level: 'Новичок, проживание в домиках, дети от 12 лет',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 3,
        level: 'Маршрут подойдет всем желающим',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 4,
        level: 'Проживание в палатках, переходы с рюкзаками',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 5,
        level: 'Проживание в палатках, переходы с рюкзаками',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 6,
        level: 'Новичок, проживание в домиках, дети от 12 лет',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Complexities', level);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Complexities', null, {});
  },
};
