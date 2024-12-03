import Loader from "../../ui/Loader";
import BlogComments from "../comments/BlogComments";
import RelatedPost from "./RelatedPost";

import usegetSinglePost from "./useSinglePost";

function SinglePost() {
  const { post, isLoading } = usegetSinglePost();

  if (!post) return <h1>پستی وجود ندارد</h1>;
  if (isLoading) return <Loader />;
  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post.title}
      </h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="w-1/2 h-auto overflow-hidden rounded-lg mb-10">
        <img
          className="object-fill object-center w-full hover:scale-110 transition-all ease-out duration-300"
          src={post.coverImageUrl}
        />
      </div>
      
      
      {post.related.length > 0 ? <RelatedPost posts={post.related} /> : null}
      <BlogComments post={post} />
    </div>
  );
}

export default SinglePost;
