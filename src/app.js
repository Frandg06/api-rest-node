import express from "express";
import { workoutsRouter } from "./routes/v1/workouts.routes.js";

//Creamos la app de express
const app = express();

//Configuramos el app use para iinterpretar los json de las peticiones
app.use(express.json());

//Importamos nuestros routers
app.use("/api/v1/workouts", workoutsRouter);

export default app;
