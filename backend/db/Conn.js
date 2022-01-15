const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('db_imc', 'root', 'root',{
    host:'localhost',
    dialect:'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectado ao Sequelize')
    
} catch (error) {
    console.log('Não foi possivel conectar:', error)
}

module.exports = sequelize