const mongoose = require('mongoose');
const { Schema } = mongoose;

// Subschema de alimentos SEM _id
const AlimentoSchema = new Schema({
  nome: String,
  quantidade: String
}, { _id: false });

// Subschema de refeições COM _id
const RefeicaoSchema = new Schema({
  tipo: String,
  horario: Number,
  alimentos: [AlimentoSchema]
});

const DietaSchema = new Schema({
  nome: String,
  dataInicio: Date,
  dataFim: Date,
  objetivo: String,
  refeicoes: [RefeicaoSchema]
});

module.exports = mongoose.model('Dieta', DietaSchema);
