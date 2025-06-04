import { useState } from "react"

export const UserForm = ()=>{
  const [email, setEmail] = useState("");

  const handleChange = (e:any)=>{
    setEmail(e.target.value);
  };

  return(
    <>
      <p data-testid="user-email">{email}</p>
      <input type="text" placeholder="email" onChange={handleChange} data-testid="input-email"/>
      {/* <ul>
        li role="list-item"
        li
        li
        li
      </ul> */}
    </>
  )
}