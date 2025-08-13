'use strict';
/** @type {import('sequelize-cli').Migration} */
 export async function up(queryInterface, Sequelize) 
 {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.STRING,
         allowNull:false,
      },
      flightId: {
        type: Sequelize.INTEGER,
         allowNull:false,
         references:{
          model:"Airplanes",
          key:"id"
         },
         onDelete:"CASCADE",
      },
      departureAirportId: {
        type: Sequelize.STRING,
         allowNull:false,
         references:{
          model:"Airports",
          key:"code"
         },
         onDelete:"CASCADE",
      },
      arrivalAirportID: {
        type: Sequelize.STRING,
         allowNull:false,
         references:{
          model:"Airports",
          key:"code"
         },
         onDelete:"CASCADE",
      },
      airvalTime: {
        type: Sequelize.DATE,
         allowNull:false,
      },
      departureTime: {
        type: Sequelize.DATE,
         allowNull:false,
      },
      price: {
        type: Sequelize.INTEGER,
         allowNull:false,
      },
      boardingGate: {
        type: Sequelize.STRING
      },
      totalSeates: {
        type: Sequelize.INTEGER,
         allowNull:false,
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
 export async function down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }