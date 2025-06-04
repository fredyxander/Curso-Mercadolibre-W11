import express from "express";
import { checkPermissions } from "../middlewares/checkPermissions.js";

const router = express.Router();

const users = [
  {id:1, name:"pepe"},
  {id:2, name:"juan"},
  {id:3, name:"Laura"},
];

// router.get("/", ()=>{});

//ruta base: /usuarios

//cliente => GET /localhost:3000/usuarios/

router.get("/", (req,res)=>{
  res.json({result:users, message:"Listado de usuarios"})
});

router.post("/", checkPermissions , (req,res)=>{
  res.send("ruta para crear usuario");
});

router.put("/:userId", checkPermissions, (req,res)=>{
  res.send("ruta para actualizar usuario");
});

router.patch("/:userId", (req,res)=>{
  console.log("req.body", req.body);
  res.send("ruta para actualizar parcialmente usuario");
});

router.delete("/:userId", checkPermissions, (req,res)=>{
  res.send("ruta para eliminar usuario");
});

export {router as userRouter};//module

// module.exports = {router: userRouter}//commonjs