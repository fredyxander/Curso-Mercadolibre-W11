import './App.css'

import { UserComponent } from './components/User/User'
import { PostComponent } from './components/PostComponent/Posts';
import { useUserPosts } from './hooks/useUserPosts';

function App() {
  const {posts, isLoadingPosts, errorPost, handlePost} = useUserPosts();

  return (
    <div style={{height:"1200px"}}>
      <UserComponent onHandlePosts={handlePost}/>
      <PostComponent posts={posts} isLoadingPosts={isLoadingPosts}/>
    </div>
  )
}

export default App
