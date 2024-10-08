"use strict";

/\*_ @type {import('sequelize-cli').Migration} _/
module.exports = {
async up(queryInterface, Sequelize) {
await queryInterface.createTable("users", {
id: {
type: Sequelize.INTEGER,
allowNull: false,
autoIncrement: true,
primaryKey: true,
},
name: {
type: Sequelize.STRING,
allowNull: false,
},
password: {
type: Sequelize.STRING,
allowNull: false,
},
email: {
type: Sequelize.STRING,
allowNull: false,
},
created_at: {
type: Sequelize.DATE,
allowNull: false,
},
updated_at: {
type: Sequelize.DATE,
allowNull: false,
},
});
},

async down(queryInterface, Sequelize) {
await queryInterface.dropTable("users");
},
};

##

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
class User extends Model {
/\*\*
_ Helper method for defining associations.
_ This method is not a part of Sequelize lifecycle.
_ The `models/index` file will call this method automatically.
_/
static associate(models) {
// define association here
}
}
User.init(
{
id: {
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true,
},
name: DataTypes.STRING,
email: DataTypes.STRING,
password: DataTypes.STRING,
created_at: DataTypes.DATE,
updated_at: DataTypes.DATE,
},
{
sequelize,
modelName: "User",
tableName: "users",
timestamps: true,
createdAt: "created_at",
updatedAt: "updated_at",
}
);
return User;
};
