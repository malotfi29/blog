import ButtonIcon from "../../ui/ButtonIcon";
import { toPersianDigits } from "../../utils/numberFormatter";

import {
  BookmarkIcon,
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import {
  BookmarkIcon as SolidBookmarkIcon,
  HeartIcon as SolidHeartIcon,
} from "@heroicons/react/24/solid";

import useLikePost from "./useLikePost";
import usegetUser from "../auth/useProfile";
import useBookmarkPost from "./useBookmarkPost";

function PostInteractions({ post }) { 
  const { likePost } = useLikePost();
  const{bookmarkPost}=useBookmarkPost()
  const { user } = usegetUser();
  const userId = user._id;

  const likeHandler = (postId) => {
    likePost({ postId, userId });
  };

  const bookmarkHandler = (postId) => {
    bookmarkPost({ postId, userId });
  };

  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <ChatBubbleLeftEllipsisIcon />
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>
      <ButtonIcon variant="red" onClick={() => likeHandler(post._id)}>
        {post.isLiked ? <SolidHeartIcon /> : <HeartIcon />}
      </ButtonIcon>
      <ButtonIcon variant="primary" onClick={() => bookmarkHandler(post._id)}>
        {post.isBookmarked ? <SolidBookmarkIcon /> : <BookmarkIcon />}
      </ButtonIcon>
    </div>
  );
}

export default PostInteractions;
