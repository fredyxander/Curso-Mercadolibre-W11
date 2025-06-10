import { Post } from "../types/Post.type";

export const getPostsByUserId = async(userId:string):Promise<Post[]>=>{
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const data: Post[] = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};