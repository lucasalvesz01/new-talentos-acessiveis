const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME, // Nome do banco
  process.env.DB_USER, // Usuário
  process.env.DB_PASSWORD, // Senha
  {
    host: process.env.DB_HOST,
    dialect: 'mysql', // Dialeto do banco de dados
  }
);

module.exports = sequelize;
