"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //ASYNC FOR ADDING A CLASS OR CREATE A TABLE THAT KIND OF FUNCTIONALIY WE WRITE HERE
    await queryInterface.createTable("Cities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    //ASYNC DOWN IS FOR REMOVING A TABLE [WE USE COMMANDS IN TERMINAL TO DO THIS]
    await queryInterface.dropTable("Cities");
  },
};
