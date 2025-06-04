import express from "express";

const app = express();
const PORT = 3000;

const users = [
  {id:1, name:"pepe"},
  {id:2, name:"juan"},
  {id:3, name:"Laura"},
];

//RUTAS
app.get("/", (req,res)=>{
  // console.log("req", req);
  res.send("solictud recibida");
});

app.get("/usuarios", (req,res)=>{
  // res.send('<p style="color:red;">Parrafo como respuesta del servidor</p>');
  res.json({result:users, message:"Listado de usuarios"})
});

//Mala practica
// GET /obtenerUsuarios
// POST /crearUsuario

//Buena proactica sustantivos en plural para las rutas
// GET /usuarios
// POST /usuarios
// PUT /usuarios
// DELETE /usuarios
// CRUD Usuarios





app.listen(PORT, ()=>{console.log(`Servidor ejecutandose en el puerto ${PORT}`)});