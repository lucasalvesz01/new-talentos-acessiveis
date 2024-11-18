const User = require('../models/User');

async function cadastrarUsuario(req, res) {
    try {
        const { usuario, email, senha, dataNascimento, deficiencia, habilidades, sobre } = req.body;

        // Verifique se todos os campos foram enviados
        if (!usuario || !email || !senha || !dataNascimento || !deficiencia || !habilidades || !sobre) {
            return res.status(400).json({ message: "Dados incompletos" });
        }

        // Insira o usuário no banco de dados usando o método create do Sequelize
        await User.create({
            usuario,
            email,
            senha,
            dataNascimento,
            deficiencia,
            habilidades,
            sobre
        });

        res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    } catch (error) {
        console.error("Erro ao salvar usuário:", error);
        res.status(500).json({ message: "Erro ao salvar o usuário" });
    }
}

module.exports = { cadastrarUsuario };
