const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRouter = require("./router/userRouter");
const treinoRouter = require("./router/treinoRouter");
const dietaRouter = require("./router/dietaRouter");

const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;

const uri = "mongodb+srv://admin:root@cluster1.gdwgomu.mongodb.net/Fit?retryWrites=true&w=majority&appName=Cluster1";

mongoose
  .connect(uri)
  .then(() => console.log("Conectado ao Atlas"))
  .catch((error) => console.error("Erro ao conectar ao Atlas", error));

app.use("/user", userRouter);
app.use("/treino", treinoRouter);
app.use("/dieta", dietaRouter);
//Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
