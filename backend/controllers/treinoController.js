const Treino = require('../models/treino');

// GET - Listar todos os treinos
exports.getTreino = async (req, res) => {
  try {
    const treinos = await Treino.find();
    res.json(treinos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar treinos", error });
  }
};

// GET - Buscar treino pelo ID
exports.getTreinoById = async (req, res) => {
  try {
    const { id } = req.params;
    const treino = await Treino.findById(id);

    if (!treino) {
      return res.status(404).json({ message: "Treino não encontrado" });
    }

    res.json(treino);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar treino", error });
  }
};

// POST - Criar um novo treino
exports.createTreino = async (req, res) => {
  try {
    const novoTreino = new Treino(req.body);
    const saved = await novoTreino.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar treino", error });
  }
};

// PUT - Atualizar um treino pelo ID
exports.updateTreino = async (req, res) => {
  try {
    const { id } = req.params;
    const treinoAtualizado = await Treino.findByIdAndUpdate(id, req.body, { new: true });

    if (!treinoAtualizado) {
      return res.status(404).json({ message: "Treino não encontrado" });
    }

    res.json(treinoAtualizado);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar treino", error });
  }
};

// DELETE - Remover um treino pelo ID
exports.deleteTreino = async (req, res) => {
  try {
    const { id } = req.params;
    const treinoDeletado = await Treino.findByIdAndDelete(id);

    if (!treinoDeletado) {
      return res.status(404).json({ message: "Treino não encontrado" });
    }

    res.json({ message: "Treino deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar treino", error });
  }
};
