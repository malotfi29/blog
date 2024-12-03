import usegetAllUser from "./useGatAllUser"
import usegetAllComments from "./useGetAllComments"
import Loader from "../../ui/Loader"
import usegetAllPosts from "../posts/usePosts"
import {Card} from "./Cards"
import { toPersianDigits } from "../../utils/numberFormatter"
function Dashboard() {
  const {users,isLoadingUsers}=usegetAllUser()
  const {comments,isLoadingComments}=usegetAllComments()
  const {posts,isLoadingPosts}=usegetAllPosts()

  if(isLoadingUsers || isLoadingComments || isLoadingPosts) return <Loader/>
  // if(!users) return <p>کاربری وجود ندارد</p>
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {users ? <Card title="کاربران" value={toPersianDigits(users.length) || 0} type="users"/> : <p>کاربری وجود ندارد</p>}
      {posts ? <Card title="پست ها" value={toPersianDigits(posts.length) || 0} type="posts"/> : <p>پستی وجود ندارد</p>}
      {comments ? <Card title="نظرات" value={toPersianDigits(comments.length) || 0} type="comments"/> : <p>نظری وجود ندارد</p>}
      
    </div>
  )
}

export default Dashboard
