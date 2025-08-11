'use strict';

/** @type {import('sequelize-cli').Migration} */
  export async function up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airports',{
    type: 'FOREIGN KEY',
    name: 'fk_airports_cityId',
    fields:['cityId'],
    references: {
      table: 'Cities',
      field: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });
  };

  export async function down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports', 'fk_airports_cityId');
  }
