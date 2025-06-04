import express from "express";
import { checkPermissions } from "../middlewares/checkPermissions.js";

const router = express.Router();

router.get("/", (req,res)=>{
  res.send("obtener productos")
});

router.post("/", checkPermissions ,(req,res)=>{
  res.send("ruta para crear producto");
});

router.put("/:id", (req,res)=>{
  res.send("ruta para actualizar producto");
});

router.delete("/:id", (req,res)=>{
  res.send("ruta para eliminar producto");
});

export {router as productRouter};