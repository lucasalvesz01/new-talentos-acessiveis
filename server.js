// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db'); // Conexão com o banco de dados
const userRoutes = require('./routes/userRoutes'); // Rotas de usuário

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// Usando as rotas definidas
app.use(userRoutes);

// Iniciar o servidor e sincronizar o banco de dados
console.log("Tentando sincronizar com o banco de dados...");
db.sync().then(() => {
  app.listen(PORT, '0.0.0.0', () => {  // Adicionando '0.0.0.0' para escutar em todas as interfaces
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch((error) => {
  console.error('Erro ao sincronizar o banco de dados:', error);
});

// Rota para salvar dados (inserir usuário)
app.post('/save', async (req, res) => {
  try {
    const { usuario, email, senha, dataNascimento, deficiencia, habilidades, sobre } = req.body;

    if (!usuario || !email || !senha || !dataNascimento || !deficiencia || !habilidades || !sobre) {
      return res.status(400).json({ message: "Dados incompletos" });
    }

    const query = 'INSERT INTO usuarios (usuario, email, senha, dataNascimento, deficiencia, habilidades, sobre) VALUES (?, ?, ?, ?, ?, ?, ?)';
    await db.query(query, [usuario, email, senha, dataNascimento, deficiencia, habilidades, sobre]);

    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    console.error("Erro ao salvar usuário:", error);
    res.status(500).json({ message: "Erro ao salvar o usuário" });
  }
});

// Rota para listar todos os usuários para o feed
app.get('/users', async (req, res) => {
  try {
    const query = 'SELECT usuario, email, dataNascimento, deficiencia, habilidades, sobre FROM usuarios';
    const [results] = await db.query(query);

    console.log('Resultados obtidos:', results);
    res.status(200).json(results);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ message: 'Erro ao buscar usuários' });
  }
});

module.exports = app;