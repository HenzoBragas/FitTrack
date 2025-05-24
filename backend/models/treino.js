const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExercicioSchema = new Schema({
  nome: String,
  series: Number,
  repeticoes: Number,
  tempoDescanso: String
}, { _id: false });

const FichaSchema = new Schema({
  nomeFicha: String,
  exercicios: [ExercicioSchema]
});

const TreinoSchema = new Schema({
  nome: String,
  tempo: Number,
  data: Date,
  fichas: [FichaSchema]
});

module.exports = mongoose.model('Treino', TreinoSchema);
