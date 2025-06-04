import { useContext } from "react"
import { UsersContext } from "../../context/UsersContext"

export const ProductsPage = ()=>{
  const {users}= useContext(UsersContext);
  return(
    <>
      <h3>products page {users?.[0]?.name}</h3>
    </>
  )
}