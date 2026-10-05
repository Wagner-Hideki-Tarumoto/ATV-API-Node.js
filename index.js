import express from "express";
import "./config/db-connection.js";
import turismoRoutes from "./routes/turismoRoutes.js";

const app = express();
const PORTA = process.env.PORT || 3000;

app.use(express.json());
app.use("/turismos", turismoRoutes);

app.listen(PORTA, () => {
  console.log("Servidor rodando em http://localhost:" + PORTA);
});