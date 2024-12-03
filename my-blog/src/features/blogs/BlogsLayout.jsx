import toast from "react-hot-toast";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomeNavLink";
import Sidebar from "../../ui/Sidebar";
import usegetUser from "../auth/useProfile";
import usegetAllBlogsCategory from "./useBlogs";
import { useNavigate } from "react-router-dom";

function BlogsLayout() {
  
  const { categories } = usegetAllBlogsCategory();

 

  if(!categories) return <p>بلاگی وجود ندارد</p>

  return (
    <AppLayout>
      <Sidebar>
        <h1 className="font-bold mr-2 text-2xl">لیست بلاگ ها</h1>
        <CustomNavLink  to="blogs">
            <span>همه</span>
          </CustomNavLink>
        {categories.map((c) => (
          <CustomNavLink key={c._id} to={`categoryBlogs/${c.slug}`} >
            <span>{c.title}</span>
          </CustomNavLink>
        ))}
      </Sidebar>
    </AppLayout>
  );
}

export default BlogsLayout;
