import { Post } from "../../types/Post.type";

export type PostComponentProps = {
  posts: Post[];
  isLoadingPosts: boolean;
};

export const PostComponent = ({posts, isLoadingPosts}: PostComponentProps)=>{
  return(
    <>
    {
      isLoadingPosts ? <p>cargando publicaciones</p>
      :
        posts.length ?
        <ul>
          {
            posts.map((post:Post)=>(
              <p key={post.id}>{post.title}</p>
            ))
          }
        </ul>
        :
        <p>El usuario no tiene publicaciones</p>
    }
    </>
  )
}