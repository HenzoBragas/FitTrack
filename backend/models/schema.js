const mongoose = require('mongoose');

//Ficha de Treino
const workoutSchema = new mongoose.Schema({
    muscleGroup: { type: String }, // Grupo muscular que o exercício trabalha
    days: {type: String},
    exercises:[
        {
        name:{type: String}, //Nome exercicio
        series: {type: String} // Series e Repeticoes
        }
    ]
});

// Nutrição
const nutritionSchema = new mongoose.Schema({   
    dietType:{type: String}, //Ganho de massa muscular
    meals: [
        {
            days:{type: String},
            mealsType:{type: String}, //Cafe da manha
            food:{type: [String]} // Lista Alimentos
        }
    ]
})

const PlansSchema = new mongoose.Schema({
    workout: workoutSchema,
    nutrition: nutritionSchema
})


const userSchema = new mongoose.Schema({
    name:{type: String},
    email:{type: String},
    password:{type: String},
    height:{type: Number},
    weight: {type: Number},
    plans: PlansSchema
});

module.exports = mongoose.model('User', userSchema);