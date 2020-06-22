const Sequelize = require('sequelize')
const connectionString ='postgres://tainguyen:123456@localhost:5432/thuchanh' 

const db = new Sequelize(connectionString)

module.exports = db