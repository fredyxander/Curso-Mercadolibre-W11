import { useContext } from "react"
import { UserCardItem } from "../UserCardItem/UserCardItem"
import { UsersContext } from "../../../../context/UsersContext"

export const UserCard = ()=>{
  console.log("context", useContext(UsersContext));
  const {users} = useContext(UsersContext);

  console.log("UserCard", users);

  return(
    <div style={{border:"1px solid orange", padding:"10px", margin:"10px"}}>
      <h3>user card {users[0].name}</h3>
      <UserCardItem/>
    </div>
  )
}