const db = require('./db')
const Sequelize = require('sequelize')
const Model = Sequelize.Model

class nhanvien extends Model {
  
    static async findBynhanvien(MaNV) {
        return nhanvien.findOne({
            where: {
                MaNV,
            }
        });
    }
}
// nhanvien Table Created Method
User.init({
    MaNV: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    HoTenNV : {
        type: Sequelize.STRING,
        allowNull: true
    },
    SoDT: {
        type: Sequelize.STRING,
        allowNull: true
    },
  
    DiaChi: {
        type: Sequelize.STRING,
        allowNull: true
    },
    NgaySinh: {
        type: Sequelize.DATE,
        allowNull: true
    },
    CMND: {
        type: Sequelize.STRING,
        allowNull: true
    },
   

}, {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: 'nhanvien' // We need to choose the model name
});

module.exports = nhanvien