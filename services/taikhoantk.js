const db = require('./db')
const Sequelize = require('sequelize')
const Model = Sequelize.Model

class taikhoantk extends Model {
  
    static async findBytaikhoantk(MaTK) {
        return taikhoantk.findOne({
            where: {
                MaTK,
            }
        });
    }
}
// taikhoantk Table Created Method
User.init({
    MaTK: {
        type: Sequelize.STRING,
        allowNull: false
    },
    MaND : {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    NgayDK: {
        type: Sequelize.DATE,
        allowNull: true
    },
  
    KiHan: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    NgayGH: {
        type: Sequelize.DATE,
        allowNull: true
    },
    LaiSuat: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
   

}, {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: 'taikhoantk' // We need to choose the model name
});

module.exports = taikhoantk