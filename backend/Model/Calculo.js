
const {DataTypes} = require("sequelize")

const db = require("../db/Conn")

const Calculo = db.define('IMC', {
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    height:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    weight:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    result: {
        type:DataTypes.FLOAT,
        allowNull:false
    },
    classification:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = Calculo