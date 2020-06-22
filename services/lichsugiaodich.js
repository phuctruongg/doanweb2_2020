const db = require('./db')
const Sequelize = require('sequelize')
const Model = Sequelize.Model

class lichsugiaodich extends Model {
    
    static async findLichSuGiaoDich(MaLSGD) {
        return lichsugiaodich.findOne({
            where: {
                MaLSGD,
            }
        });
    }
}
// lichsugiaodich Table Created Method
User.init({
    MaLSGD: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    TKNguoiNhan: {
        type: Sequelize.STRING,
        allowNull: true
    },
    SoTien: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    ThoigianGD: {
        type: Sequelize.DATE,
        allowNull: true
    },

}, {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: 'lichsugiaodich' // We need to choose the model name
});

module.exports = lichsugiaodich