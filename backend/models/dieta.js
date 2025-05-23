const mongoose = require('mongoose');
const { Schema } = mongoose;

const DietaSchema =  new Schema({
    nome: String,
    dataInicio: Date,
    dataFim: Date,
    objetivo: String,
    refeicoes: [{
        tipo: String,
        horario: Number,
        alimentos: [{
            nome: String,
            quantidade: String,
     } ]
    }]
});

module.exports = mongoose.model('Dieta', DietaSchema);