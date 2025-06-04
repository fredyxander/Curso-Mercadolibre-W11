import express from "express";
import {userRouter} from "./routes/userRouter.js";
import { productRouter } from "./routes/productRouter.js";

const app = express();
const PORT = 3000;
app.use(express.json());


app.use((req,res,next)=>{
  console.log(req.body);
  console.log("middleware a nivel de aplicación");
  req.body.date=new Date();
  next();
});

//RUTAS
app.get("/", (req,res)=>{
  res.send("solictud recibida");
});
app.use("/usuarios", userRouter);
app.use("/products", productRouter);

//middleware de error
app.use((req,res,next)=>{
  res.status(404).send("La ruta solicitada no existe");
  next();
});

app.listen(PORT, ()=>{console.log(`Servidor ejecutandose en el puerto ${PORT}`)});