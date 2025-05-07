const User = require("../models/schema");

//GET
exports.getUsers = async (req, res) => {
  try {
    const schema = await User.find();
    res.json(schema);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar dados", error });
  }
};

//POST
exports.createUsers = async (req, res) => {
  try {
    const { name, email, password, height, weight, plans } = req.body; //TEMP
    const newUser = new User({ name, email, password, height, weight, plans });
    const saved = await newUser.save();
    res.status(201).json(saved);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel adicionar os dados", error });
  }
};

//PUT
exports.updateUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, height, weight, plans } = req.body;

    const updateData = await User.findByIdAndUpdate(
      id,
      { name, email, height, weight, plans },
      { new: true }
    );

    if (!updateData) {
      return res.status(404).json({ message: "Produto não atualizado" });
    }

    res.json(updateData);
  } catch (error) {
    res.status(500).json({ message: "Erro atualizar o produto", error });
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
