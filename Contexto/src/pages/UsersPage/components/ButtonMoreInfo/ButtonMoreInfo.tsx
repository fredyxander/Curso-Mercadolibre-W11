import { useContext } from "react"
import { UsersContext } from "../../../../context/UsersContext"

export const ButtonMoreInfo = ()=>{
  const {users}= useContext(UsersContext);
  console.log("button", users)
  return(
    <div style={{border:"1px solid purple", padding:"10px", margin:"10px"}}>
      <h3>user button {users[0].name}</h3>
    </div>
  )
}