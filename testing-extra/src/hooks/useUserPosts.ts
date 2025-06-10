import { useState } from "react";
import { getPostsByUserId } from "../api/postsFetch";
import { Post } from "../types/Post.type";
import { UserIdType } from "../types/user.type";

export const useUserPosts = ()=>{
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [errorPost, setErrorPost] = useState('');

  const handlePost = async(userId: UserIdType)=>{
    try {
      setIsLoadingPosts(true);
      const response = await getPostsByUserId(userId?.toString() || '');
      setPosts(response);
    } catch (error) {
      setErrorPost((error as Error).message);
    } finally{
      setIsLoadingPosts(false);
    }
  };

  return {
    posts,
    isLoadingPosts,
    errorPost,
    handlePost
  }
};