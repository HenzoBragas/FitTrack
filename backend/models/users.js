const mongoose = require('mongoose');
const { Schema } = mongoose;

const TreinoUsuarioSchema = new Schema({
    treino_id: {type: Schema.Types.ObjectId, ref:'treino', required: true},
    nome: String,
    data: String,
}, {_id: false});

const DietaUsuarioSchema = new Schema({
    dieta_id: {type: Schema.Types.ObjectId, ref:'Dieta', required: true},
    nome: String, 
    data: String
}, {_id: false});

const usuarioSchema = new Schema({
    nome: String, 
    cpf: Number,
    email: String,
    senha: String,
    idade: Number,
    peso: Number,
    altura: Number,
    observacoes: [String],
    treinos: [TreinoUsuarioSchema],
    dietas: [DietaUsuarioSchema]
});

module.exports = mongoose.model('User', usuarioSchema);