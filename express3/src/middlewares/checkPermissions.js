// localhost:3000/usuarios?type=admin

export const checkPermissions = (req,res,next)=>{
  const {type} = req.query;
  if(type !== "admin"){
    return res.status(403).send("No tienes permisos suficientes");
  }
  next();
}

// export {checkPermissions}