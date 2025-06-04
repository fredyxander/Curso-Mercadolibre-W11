import { useEffect, useState } from "react";
import { getUser, User } from "../../api/users";

export const UserDetail = ()=> {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading]= useState(false);
  const [name, setName]=useState("");

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        setLoading(true);
        const response = await getUser(1);
        console.log("fethcing", response);
        setUser(response);
      } catch (error) {
        
      } finally{
        setLoading(false);
      }
    };
    fetchData()
  },[])

  
  if(loading) return <p data-testid="loading-test">Cargando...</p>
  if(!user) return <p >No se encontro el usuario</p>
  
  return (
    <>
      <p data-testid="username-test">{user?.username}</p>
      <p data-testid="usercity-test">{user?.city}</p>
      <hr/>
      <p data-testid="click-name-tets">{name}</p>
      <button data-testid="button-test" onClick={()=>setName("juan")}>cambiar</button>
    </>
  )
}
