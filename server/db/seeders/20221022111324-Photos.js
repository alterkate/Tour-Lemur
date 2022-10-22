'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const photos = [
      {
        trip_id: 1,
        main: '/images/Dagestan/Dagestan_main.jpeg',
        photo1: '/images/Dagestan/Dagestan_main.jpeg',
        photo2: '/images/Dagestan/Dagestan_main.jpeg',
        photo3: '/images/Dagestan/Dagestan_main.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 2,
        main: '/images/Altai/Altai_komfort_main.jpeg',
        photo1: '/images/Altai/Altai_komfort_main.jpeg',
        photo2: '/images/Altai/Altai_komfort_main.jpeg',
        photo3: '/images/Altai/Altai_komfort_main.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 3,
        main: '/images/Altai/Altai_karakabakskiey_main.jpeg',
        photo1: '/images/Altai/Altai_karakabakskiey_main.jpeg',
        photo2: '/images/Altai/Altai_karakabakskiey_main.jpeg',
        photo3: '/images/Altai/Altai_karakabakskiey_main.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 4,
        main: '/images/Altai/Altai_Aktru_main.jpeg',
        photo1: '/images/Altai/Altai_Aktru_main.jpeg',
        photo2: '/images/Altai/Altai_Aktru_main.jpeg',
        photo3: '/images/Altai/Altai_Aktru_main.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 5,
        main: '/images/Kavkaz/Bezengi_main.jpeg',
        photo1: '/images/Kavkaz/Bezengi_main.jpeg',
        photo2: '/images/Kavkaz/Bezengi_main.jpeg',
        photo3: '/images/Kavkaz/Bezengi_main.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 6,
        main: '/images/Altai/Altai_osen_main.jpeg',
        photo1: '/images/Altai/Altai_osen_main.jpeg',
        photo2: '/images/Altai/Altai_osen_main.jpeg',
        photo3: '/images/Altai/Altai_osen_main.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Photos', photos);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Photos', null, {});
  },
};
