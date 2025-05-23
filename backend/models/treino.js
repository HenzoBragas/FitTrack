const mongoose = require('mongoose');
const { Schema } = mongoose;

const TreinoSchema = new Schema({
  nome: String,
  tempo: Number,
  data: Date,
  fichas: [{
    nomeFicha: String,
    exercicios: [{
      nome: String,
      series: Number,
      repeticoes: Number,
      tempoDescanso: String
    }]
  }]
})

module.exports = mongoose.model('Treino', TreinoSchema);