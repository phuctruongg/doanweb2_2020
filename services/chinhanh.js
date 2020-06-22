const db = require('./db')
const Sequelize = require('sequelize')
const Model = Sequelize.Model

class chinhanh extends Model {
  
    static async findUserByChiNhanh(MaCN) {
        return chinhanh.findOne({
            where: {
                MaCN,
            }
        });
    }
}
// ChiNhanh Table Created Method
User.init({
    MaCN: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    DiaChi: {
        type: Sequelize.STRING,
        allowNull: true
    },
    TenChiNhanh: {
        type: Sequelize.STRING,
        allowNull: true
    },
    

}, {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: 'chinhanh' // We need to choose the model name
});

module.exports = chinhanh