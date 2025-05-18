const mongoose = require('mongoose');

const RefeicaoSchema = new mongoose.Schema({
    nome:  String,
    horario: String,
    descricao: [String]
}, {_id: false});

const DietaSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    data: String,
    alimentacao: [RefeicaoSchema]
});

module.exports = mongoose.model('Dieta', DietaSchema);