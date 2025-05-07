const mongoose = require('mongoose');

// Subdocumento de exercício (sem _id)
const exerciseSchema = new mongoose.Schema({
  name: { type: String },
  series: { type: String }
}, { _id: false });

// Ficha de treino
const workoutSchema = new mongoose.Schema({
  muscleGroup: { type: String },
  days: { type: String },
  exercises: [exerciseSchema] // sem _id em cada exercício
}, { _id: false });

// Subdocumento de refeição (sem _id)
const mealSchema = new mongoose.Schema({
  days: { type: String },
  mealsType: { type: String },
  food: { type: [String] }
}, { _id: false });

// Nutrição
const nutritionSchema = new mongoose.Schema({
  dietType: { type: String },
  meals: [mealSchema] // sem _id em cada refeição
});

// Plano (sem _id)
const plansSchema = new mongoose.Schema({
  workout: workoutSchema,
  nutrition: nutritionSchema
});

// Usuário
const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  height: { type: Number },
  weight: { type: Number },
  plans: plansSchema
});

module.exports = mongoose.model('User', userSchema);
