const User = require("../models/users");
const Treino = require("../models/treino");
const Dieta = require("../models/dieta");

//GET
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar dados", error });
  }
};
// POST
exports.createUsers = async (req, res) => {
  try {
    const {
      nome,
      cpf,
      email,
      senha,
      idade,
      peso,
      altura,
      observacoes,
      treino_id,
      dieta_id,
    } = req.body;

    // Busca treino e dieta pelo id
    const treino = await Treino.findById(treino_id);
    const dieta = await Dieta.findById(dieta_id);

    if (!treino || !dieta) {
      return res.status(404).json({ message: "Treino ou Dieta não encontrados" });
    }

    const newUser = new User({
      nome,
      cpf,
      email,
      senha,
      idade,
      peso,
      altura,
      observacoes,
      treinos: [{
        treino_id: treino._id,
        nome: treino.nome,
        data: new Date().toISOString().slice(0,10) 
      }],
      dietas: [{
        dieta_id: dieta._id,
        nome: dieta.nome,
        data: new Date().toISOString().slice(0,10)
      }]
    });

    const saved = await newUser.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: "Não foi possível adicionar os dados", error });
  }
};

//PUT
exports.updateUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nome,
      email,
      senha,
      idade,
      peso,
      altura,
      observacoes,
      treino_id,
      dieta_id,
    } = req.body;

    const updateData = await User.findByIdAndUpdate(id, {
      nome,
      email,
      senha,
      idade,
      peso,
      altura,
      observacoes,
      treino_id,
      dieta_id,
    },
    {new: true}
  );

    if (!updateData) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.json(updateData);
  } catch (error) {
    res.status(500).json({ message: "Erro atualizar o usuário", error });
  }
};

//DELETE
exports.deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteData = await User.findByIdAndDelete(id);

    if (!deleteData) {
      return res.status(404).json({ message: "Dado não encontrado" });
    }
    res.json({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar dado", error });
  }
};
