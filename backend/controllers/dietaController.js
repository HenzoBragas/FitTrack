const Dieta = require('../models/dieta');

// GET - Listar todas as dietas
exports.getDieta = async (req, res) => {
  try {
    const dietas = await Dieta.find();
    res.json(dietas);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar dietas", error });
  }
};


// Utilizado para buscar um dieta específico pelo seu ID,
// geralmente para incorporar os dados do dieta em outras collections (como users).
// Retorna o dieta encontrado ou um erro caso não seja encontrado ou ocorra algum problema.
exports.getDietaById = async (req, res) => {
  try {
    const { id } = req.params;
    const dieta = await Dieta.findById(id);

    if (!dieta) {
      return res.status(404).json({ message: "Dieta não encontrada" });
    }

    res.json(dieta);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar dieta", error });
  }
};

// POST - Criar uma nova dieta
exports.createDieta = async (req, res) => {
  try {
  //Cria uma instância do modelo Treino e salva esse novo documento no banco MongoDB     
    const novaDieta = new Dieta(req.body);
    const saved = await novaDieta.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar dieta", error });
  }
};

// PUT - Atualizar uma dieta pelo ID
exports.updateDieta = async (req, res) => {
  try {
    const { id } = req.params;
    const dietaAtualizada = await Dieta.findByIdAndUpdate(id, req.body, { new: true });

    if (!dietaAtualizada) {
      return res.status(404).json({ message: "Dieta não encontrada" });
    }

    res.json(dietaAtualizada);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar dieta", error });
  }
};

// DELETE - Remover uma dieta pelo ID
exports.deleteDieta = async (req, res) => {
  try {
    const { id } = req.params;
    const dietaDeletada = await Dieta.findByIdAndDelete(id);

    if (!dietaDeletada) {
      return res.status(404).json({ message: "Dieta não encontrada" });
    }

    res.json({ message: "Dieta deletada com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar dieta", error });
  }
};
