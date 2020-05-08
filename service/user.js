const users = [
    {id: '1', email: 'hongphuc@gmail.com',displayName: 'Phuc Truong', password: 'kocopass', doList:['Ăn Cơm','Làm bài tập']},
] 

function findUserByID(id){
    return users.find(u => u.id === id)
}

function findUserByEmail(email) {
    return users.find(u => u.email == email)
}

module.exports = {
    findUserByID,
    findUserByEmail,
}