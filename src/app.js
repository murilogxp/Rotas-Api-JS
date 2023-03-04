import express from "express";
import router from "./routes.js";

const port = process.env.PORT || 3000;
const app = express();
app.use(router);

app.listen(port, () => console.log("Servidor Rodando..."));
