const Sequelize = require('sequelize');
const database = require('./db');
 
const M2_Equipes = database.define('m2_equipes', {
    idequipe: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.CHAR(150),
        allowNull: false
    },
    ativo: Sequelize.INTEGER
})
 
const M2_Usuarios = database.define('m2_usuarios', {
    idusuario: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.CHAR(150),
        allowNull: false
    },
    password: {
        type: Sequelize.CHAR(150),
        allowNull: false
    },
    login: Sequelize.CHAR(30),
    idequipe: {
        type: Sequelize.INTEGER,
        references: {
            model: 'equipes',
            key: 'idequipe'
        }
    },
    ativo: Sequelize.INTEGER
})

M2_Equipes.hasOne(M2_Usuarios)

module.exports = {
    equipes: M2_Equipes,
    usuarios: M2_Usuarios
}