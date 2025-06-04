const getUsers = ()=>{};

export type User = {
  id:number,
  username:string,
  city:string
}

export const getUser = async(id:number):Promise<User>=>{
   return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve({id:1, username:"pepe", city:"Barcelona"})
    },3000)
   })
};


const createUser = ()=>{};