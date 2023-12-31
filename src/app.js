import express, { json } from "express";
import index from "./routes/index.js";
import db from "./config/dBConnect.js";
import listas from "./routes/lista.js";
import chalk from "chalk";

const app = express();

app.use(json());
app.use("/", index);
app.use("/contato", listas);

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log(chalk.blue.bgGreen.bold("Conexão com o banco feita com sucesso"));
});

export default app;