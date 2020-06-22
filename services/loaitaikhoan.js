const db = require('./db')
const Sequelize = require('sequelize')
const Model = Sequelize.Model

class loaitaikhoan extends Model {
   
    static async findloaitaikhoan(MaTK,MaND) {
        return loaitaikhoan.findOne({
            where: {
                MaTK,
                MaND
            }
        });
    }
}
// loaitaikhoan Table Created Method
User.init({
    MaTK: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    MaND: {
        type: Sequelize.STRING,
        allowNull: true
    },
    TenTK: {
        type: Sequelize.STRING,
        allowNull: true
    },
    HanMuc: {
        type: Sequelize.STRING,
        allowNull: true
    },

}, {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: 'loaitaikhoan' // We need to choose the model name
});

module.exports = loaitaikhoan