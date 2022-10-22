'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const rout = [
      {
        trip_id: 1,
        day: 1,
        description:
          'сбор группы в 19.45 в Тюмени. Выезд (по пути возможно забрать участников из Кургана, Челябинска)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 1,
        day: 2,
        description:
          'во второй половине дня приезжаем в Самару, заселяемся в хостел, гуляем по вечернему городу',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 1,
        day: 3,
        description:
          'переезд до Волгограда, заселение, прогулка по вечернему праздничному городу',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 1,
        day: 4,
        description:
          'переезд до Махачкалы, прогулка по городу, приветственный ужин',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 1,
        day: 5,
        description:
          'отправляемся в древний город Дербент, посещаем экраноплан "Лунь"',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 1,
        day: 6,
        description:
          'Переезжаем в центральную часть республики, изучаем Гуниб, а на закат отправляемся в село-призрак Гамсутль',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 1,
        day: 7,
        description:
          'дневная экскурсия на водопад Тобот и в Карадахскую теснину',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 1,
        day: 8,
        description:
          'переезд в республику Чечня (г. Грозный), по пути заедем погулять на визитную карточку Дагестана - Сулакский каньон',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 1,
        day: 9,
        description: 'дневная экскурсия на высокогорное озеро Казеной-Ам',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 1,
        day: 10,
        description:
          'переезжаем в Пятигорск, по пути заезжаем на голубое озеро Кабардино-Балкарии',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 1,
        day: 11,
        description: 'дневная экскурсия на Эльбрус (южная сторона)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        trip_id: 1,
        day: 12,
        description:
          'наша программа подошла к завершению, после 12.00 можно вылетать домой из Минеральных вод',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Routes', rout);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Routes', null, {});
  },
};
