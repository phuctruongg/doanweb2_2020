const db = require('./db')
const Sequelize = require('sequelize')
const Model = Sequelize.Model

class nguoidung extends Model {
  
    static async findUserBynguoidung(MaTK) {
        return nguoidung.findOne({
            where: {
                MaTK,
            }
        });
    }
}
// nguoidung Table Created Method
User.init({
    MaTK: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    LoaiTK : {
        type: Sequelize.STRING,
        allowNull: true
    },
    HoTenND: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    SDT: {
        type: Sequelize.STRING,
        allowNull: true
    },
    DiaChi: {
        type: Sequelize.STRING,
        allowNull: true
    },
    LSGD: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    TinhTrang: {
        type: Sequelize.STRING,
        allowNull: true
    },
    NgayMo: {
        type: Sequelize.DATE,
        allowNull: true
    },
    TKTietKiem: {
        type: Sequelize.STRING,
        allowNull: true
    },
    

}, {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: 'nguoidung' // We need to choose the model name
});

module.exports = nguoidung