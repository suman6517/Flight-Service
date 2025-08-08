'use strict';
import {Op} from "sequelize";
// /** @type {import('sequelize-cli').Migration} */
// exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };
// /**
//  * @type {import('sequelize-cli').Migration}
//  */

export async function up(queryInterface, Sequelize) {
  // Add seed data here...
  // Example:
  // await queryInterface.bulkInsert('Users', [
  //   { name: 'John Doe', isBetaMember: false }
  // ], {});
  await queryInterface.bulkInsert('Airplanes',[
    {
      modelNumber:"Boeing 747",
      capacity:500,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      modelNumber:"Airbus A380",
      capacity:600,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
};

export async function down(queryInterface, Sequelize) {
  // Revert seed data here...
  // Example:
  // await queryInterface.bulkDelete('Users', null, {});
  await queryInterface.bulkDelete("Airplanes" , {[Op.or]:[{modelNumber:"Boeing 747"},{modelNumber:"Airbus A380"}]});
};
