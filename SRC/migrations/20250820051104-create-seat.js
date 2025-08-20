'use strict';
/** @type {import('sequelize-cli').Migration} */

import { seatType } from '../Utils/Common/index.js';

const { BUSINESS , ECONOMY , PRIMIUM_ECONOMY , FIRST} =seatType;
  export  async function up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airplaneId: {
        type: Sequelize.INTEGER,
         allowNull:false,
         references:{
          model:"Airplanes",
          key:"id"
         },
         onDelete:"CASCADE",
      },
      row: {
        type: Sequelize.INTEGER,
         allowNull:false
      },
      column: {
        type: Sequelize.STRING,
         allowNull:false
      },
      seatClass: {
        type: Sequelize.ENUM,
         allowNull:false,
         values:[BUSINESS , ECONOMY , PRIMIUM_ECONOMY , FIRST],
         defaultValue:ECONOMY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  };
  export  async function down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seats');
  };