import { useEffect, useState } from "react";
import { User, UserIdType } from "../../types/user.type";
import { getUserById } from "../../api/usersFetch";

export type UserComponentProps = {
  onHandlePosts: (userId: UserIdType)=>void;
};

export const UserComponent = ({onHandlePosts}: UserComponentProps)=>{
  const [user, setUser]=useState<User | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(()=>{
    const fetchUser = async():Promise<void>=>{
      try {
        setIsLoadingUser(true);
        const response = await getUserById('2');
        // const result = filterUser('2');  // return users.filter();
        // console.log("response", response);
        setUser(response);
      } catch (error) {
        setError((error as Error).message);
      } finally{
        setIsLoadingUser(false);
      }
    };
    fetchUser();
  },[]);
  // console.log("user", user, isLoadingUser);
  return(
    <>
      <p>Información del usuario</p>
      {
        isLoadingUser ? <p data-testid="loading-msg">cargando Información del usuario</p>
        :
        <div style={{border:"1px solid gray", padding:"10px"}} data-testid="user-info">
          <h3>Nombre: {user?.name || 'Indefinido'}</h3>
          <h4>Correo: {user?.email || 'Indefinido'}</h4>
          <h4>Ciudad: {user?.address.city || 'Indefinido'}</h4>
          <button onClick={()=>onHandlePosts(user?.id)}>Ver posts</button>
        </div>
      }
    </>
  )
}