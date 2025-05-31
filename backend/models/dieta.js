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
  horario: String,
  alimentos: [AlimentoSchema]
});

const DietaSchema = new Schema({
  nome: String,
  dataInicio: String,
  dataFim: String,
  objetivo: String,
  refeicoes: [RefeicaoSchema]
});

module.exports = mongoose.model('Dieta', DietaSchema);
