'use strict';

/** @type {import('sequelize-cli').Migration} */
  export async function up (queryInterface, Sequelize) 
  {
    await queryInterface.bulkInsert('Seats',[
    {
      airplaneId:2,
      row:1,
      column:"A",
      createdAt: new Date(),
      updatedAt: new Date()
    },     
   {
      airplaneId:2,
      row:1,
      column:"B",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      airplaneId:2,
      row:1,
      column:"C",
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      airplaneId:2,
      row:1,
      column:"D",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      airplaneId:2,
      row:1,
      column:"E",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      airplaneId:2,
      row:1,
      column:"F",
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      airplaneId:2,
      row:2,
      column:"A",
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
   {
      airplaneId:2,
      row:2,
      column:"B",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      airplaneId:2,
      row:2,
      column:"C",
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      airplaneId:2,
      row:2,
      column:"D",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      airplaneId:2,
      row:2,
      column:"E",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      airplaneId:2,
      row:2,
      column:"F",
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
  ])
  };

   export async function down (queryInterface, Sequelize) 
  {
    
  };
