import { useContext } from "react"
import { UserCard } from "../UserCard/UserCard"
import { UsersContext } from "../../../../context/UsersContext"

export const UsersList = ()=>{
  const {setUsers}=useContext(UsersContext);
  return(
<div style={{border:"1px solid blue", padding:"10px", margin:"10px"}}>
      <h3>users list</h3>
      <button onClick={()=>setUsers([{id:1, name:"nuevo usuario"}])}>actualizar</button>
      <UserCard/>
</div>
  )
}