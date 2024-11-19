const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize(
  process.env.DB_NAME,       // Nome do banco
  process.env.DB_USER,       // Usuário
  process.env.DB_PASSWORD,   // Senha
  {
    host: process.env.DB_HOST, // Host do banco
    dialect: process.env.DB_DIALECT || 'mysql', // Dialeto do banco
    logging: false, // Desabilita logs SQL no console
  }
);

module.exports = db;
