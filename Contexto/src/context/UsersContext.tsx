import {createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState} from "react";


type User = {
  id:number;
  name:string;
}

type UserContextType = {
  users:User[],
  setUsers:Dispatch<SetStateAction<User[]>>;
  onAddUser:()=>void,
  profileRole: string,
  user:null,
  getUserInfo:(userId:string)=>void;
}

const usersData: User[] = [
  {id:1, name:"usuario1"},
  {id:2, name:"usuario2"},
  {id:3, name:"usuario3"},
  {id:4, name:"usuario4"},
  {id:5, name:"usuario5"},
];

const initialUsersContextValues: UserContextType = {
  users:[],
  setUsers:()=>{},
  onAddUser:()=>{},
  profileRole: '',
  user:null,
  getUserInfo:(userId:string)=>{}
  //.....
};

export const UsersContext = createContext(initialUsersContextValues);

type UsersProviderProps = {
  children: ReactNode;
}

export const UsersProvider = ({children}: UsersProviderProps)=>{
  const [users, setUsers] = useState<User[]>(usersData);
  const [userName, setUserName]=useState('');
  const [userRole, setUserRole]=useState('');
  const [user, setUser]=useState(null);
  //...

  useEffect(()=>{},[]);

  const getUserInfo = (userId:string)=>{
    //...
    setUser(null);
  };
  const convertUserData = (user:any)=>{};
  const handleAddUser=()=>{};

  return(
    <UsersContext.Provider value={{users,setUsers, onAddUser:handleAddUser, profileRole:userRole, user, getUserInfo}}>
      {children}
    </UsersContext.Provider>
  )
}


// Component1   ===> getUserInfo


// Component2    ====> user