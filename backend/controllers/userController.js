const User = require("../models/users");
const Treino = require("../models/treino");
const Dieta = require("../models/dieta");

// GET - Listar todos os usuarios

exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar dados", error });
  }
};
// POST - Cria um novo p
exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const saved = await newUser.save();
    // Busca treino e dieta pelo id
    const treino = await Treino.findById(treino_id);
    const dieta = await Dieta.findById(dieta_id);

    if (!treino || !dieta) {
      return res.status(404).json({ message: "Treino ou Dieta não encontrados" });
    }
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: "Não foi possível adicionar os dados", error });
  }
};

// PUT - Atualizar um treino pelo ID
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateUser = await User.findByIdAndUpdate();
  
    if (!updateUser) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.json(updateUser);
  } catch (error) {
    res.status(500).json({ message: "Erro atualizar o usuário", error });
  }
};

// DELETE - Remover um treino pelo ID
exports.deleteUser= async (req, res) => {
  try {
    const { id } = req.params;

    const userDelete = await User.findByIdAndDelete(id);

    if (!userDelete) {
      return res.status(404).json({ message: "Dado não encontrado" });
    }
    res.json({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar dado", error });
  }
};
