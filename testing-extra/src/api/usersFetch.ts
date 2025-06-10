import { User } from "../types/user.type";

export const getUserById = async(userId:string):Promise<User>=>{
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data: User = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};