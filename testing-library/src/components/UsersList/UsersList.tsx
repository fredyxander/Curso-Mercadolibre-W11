import { useEffect, useState } from "react"

type User ={
  id:number;
  name:string;
}

export const UsersList = ()=>{
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading]= useState(false);

  useEffect(()=>{
    const fetchUsers = async()=>{
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log("data", data)
        const usersData = data.map((item:any)=>({id:item.id, name:item.name}));
        setUsers(usersData);
      } catch (error) {
        console.log(error)
      } finally{
        setLoading(false);
      }
    };
    fetchUsers();
  },[]);

  // useEffect(()=>{
  //   if(users.length>0){
  //     getUserById()
  //   }
  // },[users])

  return(
    <>
      {
        loading ? <p data-testid="loading">cargando...</p>
        :
          users.length>0 ?
            <ul data-testid="users-list">
              {users.map(user=>(
                <li key={user.id} data-testid={`user-item-${user.id}`}>{user.name}</li>
              ))}
            </ul>
          :
          <p>No se encontraron resultados</p>
      }
    </>
  )
}