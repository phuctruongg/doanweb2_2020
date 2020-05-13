const db = require('./db')
const Sequelize = require('sequelize')
const Model = Sequelize.Model

class User extends Model {
    static async findUserbyID(id) {
        return User.findByPk(id)
    }
    static async findUserByUserName(userName) {
        return User.findOne({
            where: {
                userName,
            }
        });
    }
    static async findUserbyName(firstName, lastName) {
        return User.findOne({
            where: {
                firstName,
                lastName,
            }
        })
    }
}

// User Table Created Method
User.init({
    userID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    userType: {
        type: Sequelize.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
});

module.exports = User