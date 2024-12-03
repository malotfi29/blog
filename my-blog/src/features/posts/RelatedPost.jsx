import { NavLink } from "react-router-dom";
import CustomeNavLink from "../../ui/CustomeNavLink";
function RelatedPost({ posts }) {
  return (
    <div className=" mb-10">
      <p className="text-xl mb-4">پست های مرتبط</p>
      <div className="grid gap-4 grid-cols-6 items-center justify-center">
        {posts.map((item) => {
          return (
            <div
              key={item._id}
              className="col-span-6 md:col-span-3 lg:col-span-2"
            >
              <div className=" h-32 overflow-hidden rounded-lg">
                <img
                  className="object-fill object-center w-full hover:scale-110 transition-all ease-out duration-300"
                  src={item.coverImageUrl}
                />
              </div>
              <p>{item.title}</p>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default RelatedPost;
