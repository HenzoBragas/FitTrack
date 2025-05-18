const mongoose = require('mongoose');

const ExerciciesSchema = new mongoose.Schema({
    nome: String,
    series: Number,
    repeticoes: Number
}, {_id: false});

const TreinoSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    tempo: String,
    categoria: String,
    data: Date,
    ficha: [ExerciciesSchema]
});

module.exports = mongoose.model('Treino', TreinoSchema);