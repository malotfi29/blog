import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomeNavLink";
import Sidebar from "../../ui/Sidebar";

import usegetAllBlogsCategory from "./useBlogs";

function BlogsLayout() {
  const { categories } = usegetAllBlogsCategory();

  if (!categories) return <p>بلاگی وجود ندارد</p>;

  return (
    <AppLayout>
      <Sidebar>
        <h1 className="font-bold mr-2 text-2xl">لیست بلاگ ها</h1>

        <CustomNavLink to="blogs">
          <span>همه</span>
        </CustomNavLink>
        {categories.map((c) => (
          <CustomNavLink key={c._id} to={`categoryBlogs/${c.slug}`}>
            <span>{c.title}</span>
          </CustomNavLink>
        ))}
      </Sidebar>
    </AppLayout>
  );
}

export default BlogsLayout;
