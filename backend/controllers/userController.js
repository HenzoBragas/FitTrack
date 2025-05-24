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
// POST - Cria um novo user
exports.createUser = async (req, res) => {
  try {
    //Busca estrtura no mongoose
    const newUser = new User(req.body);

    //Pega os ids do body , busca e verifica
    const { treino_id, dieta_id } = req.body;

    //Busca o id de treino e dieta nas collections
    const treino = await Treino.findById(treino_id);
    const dieta = await Dieta.findById(dieta_id);

    if (!treino || !dieta) {
      return res.status(400).json({
        message: "Peso e altura são obrigatórios para calcular o IMC.",
      });
    }

    //Calcula IMC e verifica peso e altura
    const peso = newUser.medidas?.peso;
    const altura = newUser.medidas?.altura;

    if (!peso || !altura) {
      return res.status(400).json({
        message: "Peso e altura são obrigatórios para calcular o IMC.",
      });
    }

    const imcCalculado = peso / altura ** 2;

    // Cria newUserData com os dados do req.body, atualiza medidas com IMC calculado
    // e adiciona treino_id e dieta_id com detalhes, ou null se não existirem
    const newUserData = {
      ...req.body,
      medidas: {
        ...req.body.medidas,
        IMC: Number(imcCalculado.toFixed(2)),
      },
      treino_id: treino
        ? {
            treino_id: treino._id,
            nome: treino.nome,
            data: new Date().toISOString().slice(0, 10),
          }
        : null,
      dieta_id: dieta
        ? {
            dieta_id: dieta._id,
            nome: dieta.nome,
            dataInicio: new Date().toISOString().slice(0, 10),
            dataFim: new Date().toISOString().slice(0, 10),
          }
        : null,
    };
    // Cria uma nova instância do modelo User com os dados de newUserData.
    // Isso prepara o documento para ser salvo no banco MongoDB.
    const newUserSave = new User(newUserData);
    // Salva o novo usuário no banco de dados de forma assíncrona.
    // O método save() insere o documento e retorna o documento salvo com o _id gerado.
    const saved = await newUserSave.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Não foi possível adicionar os dados", error });
  }
};

// PUT - Atualizar um treino pelo ID
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    // busca peso e altura serem forem alterados sempre
    const { peso, altura } = req.body.medidas || {};

    // Calcula o IMC se peso e altura forem informados
    let imc;
    if (peso && altura) {
      imc = peso / (altura * altura);
      // retorna os valores atualizados 
      req.body.medidas = {
        ...req.body.medidas,
        IMC: Number(imc.toFixed(2)),
      };
    }

    // Atualiza o usuário com os dados do req.body
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updateUser) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.json(updateUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro atualizar o usuário", error });
  }
};

// DELETE - Remove um usuario pelo ID
exports.deleteUser = async (req, res) => {
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
