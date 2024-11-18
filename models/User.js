const { DataTypes } = require('sequelize');
const db = require('../config/db'); // ajuste o caminho conforme necessário

const User = db.define('usuarios', {
    usuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dataNascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    deficiencia: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    habilidades: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sobre: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    tableName: 'usuarios', // especifica o nome da tabela
    timestamps: false // se você não estiver usando campos 'createdAt' e 'updatedAt'
});

module.exports = User;
