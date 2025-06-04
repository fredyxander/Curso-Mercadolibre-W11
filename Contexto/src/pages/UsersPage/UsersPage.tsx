import { UsersList } from "./components/UsersList/UsersList"

export const UsersPage = ()=>{
  
  return(
    <div style={{border:"1px solid red", padding:"10px", margin:"10px"}}>
      <h3>users page</h3>
      <UsersList/>
    </div>
  )
}