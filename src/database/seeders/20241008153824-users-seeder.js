"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "YenDev",
          email: "yen@example.com",
          password: "123456",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "BSS",
          email: "bss@example.com",
          password: "123456",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
