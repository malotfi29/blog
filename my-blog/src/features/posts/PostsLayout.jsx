import usegetAllPosts from "./usePosts";
import { ClockIcon } from "@heroicons/react/24/outline";
import CustomeNavLink from "../../ui/CustomeNavLink";
import { NavLink } from "react-router-dom";
import Loader from "../../ui/Loader";
import PostInteractions from "./PostInteractions";


function PostsLayout({ category = "" }) {
  let selectedPosts = [];
  const { posts, isLoading } = usegetAllPosts();
  if (!posts) return null;
  if (category) {
    selectedPosts = posts.filter((p) => p.category.slug === category);
  } else {
    selectedPosts = posts;
  }

  const navLinkClass =
    "flex items-center gap-x-2  hover:text-primary-900 px-2 py-1.5 rounded-lg text-secondary-600 transition-all duration-300";

  if (category && selectedPosts.length === 0) return <p>پستی وجود ندارد</p>;
  if (isLoading) return <Loader />;
  return (
    <div className="grid grid-cols-12 gap-8 ">
      {selectedPosts.map((post) => (
        <div
          key={post._id}
          className=" col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-200 p-2 rounded-lg "
        >
          <div className="relative aspect-video overflow-hidden rounded-md mb-6">
            <CustomeNavLink to={`/blogsLayout/blogs/${post.slug}`}>
              <img
                className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
                src={post.coverImageUrl}
                alt=""
              />
            </CustomeNavLink>
          </div>
          <NavLink
            to={`/blogsLayout/blogs/${post.slug}`}
            className={({ isActive }) =>
              isActive
                ? `${navLinkClass} text-primary-100/90 `
                : `${navLinkClass} text-secondary-600`
            }
          >
            <p>{post.title}</p>
          </NavLink>

          <div className="flex items-center justify-between p-2">
            <div className="flex items-center justify-between gap-x-2">
              <p className="text-sm"> {post.author.name}</p>
              <img
                className="w-5 h-5 rounded-full"
                src={post.author.avatarUrl || ""}
                alt={post.author.name}
              />
            </div>
            <div className="flex items-center text-[10px] text-secondary-500">
              <ClockIcon className="w-4 h-4 stroke-secondary-500 ml-1" />
              <span className="ml-1">خواندن:</span>
              <span className="ml-1 leading-3">{post.readingTime}</span>
              <span>دقیقه</span>
            </div>
          </div>
            <PostInteractions post={post}/>
        </div>
      ))}
    </div>
  );
}

export default PostsLayout;
