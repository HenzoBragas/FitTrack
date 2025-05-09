const mongoose = require('mongoose');

// Subdocumento de exercício
const exerciseSchema = new mongoose.Schema({
  nome: String,
  series: Number,
  repeticoes: Number,
  duracao: String // usado em exercícios como "Corrida"
}, { _id: false });

// Subdocumento de dia de treino
const treinoDiaSchema = new mongoose.Schema({
  dia: String,
  exercicios: [exerciseSchema]
}, { _id: false });

// Treino completo
const treinoSchema = new mongoose.Schema({
  dias: [treinoDiaSchema]
}, { _id: false });

// Subdocumento de refeição
const refeicaoSchema = new mongoose.Schema({
  tipo: String,
  descricao: String
}, { _id: false });

// Subdocumento de dia de alimentação
const alimentacaoDiaSchema = new mongoose.Schema({
  dia: String,
  refeicoes: [refeicaoSchema]
}, { _id: false });

// Alimentação completa
const alimentacaoSchema = new mongoose.Schema({
  dias: [alimentacaoDiaSchema]
}, { _id: false });

// Plano completo
const planosSchema = new mongoose.Schema({
  treino: treinoSchema,
  alimentacao: alimentacaoSchema
}, { _id: false });

// Usuário
const userSchema = new mongoose.Schema({
  _id: String,
  nome: String,
  email: String,
  senha: String,
  peso: Number,
  altura: Number,
  observacoes: [String],
  planos: planosSchema
});

module.exports = mongoose.model('User', userSchema);
