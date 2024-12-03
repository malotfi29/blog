import { useParams } from "react-router-dom"
import usegetAllPosts from "../features/posts/usePosts"


function Posts() {
   const {posts}=usegetAllPosts()
    
  return (
    <div>
      Posts
    </div>
  )
}

export default Posts
