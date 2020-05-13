const Sequelize = require('sequelize')
const connectionString = 'postgres://postgres:@localhost:5433/doAn'

const db = new Sequelize(connectionString)

module.exports = db