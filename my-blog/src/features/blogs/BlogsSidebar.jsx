import { XMarkIcon } from "@heroicons/react/24/outline"
import ButtonIcon from "../../ui/ButtonIcon"
import Sidebar from "../../ui/Sidebar"
import CustomNavLink from "../../ui/CustomeNavLink"


function BlogsSidebar({categories,onClose}) {
  return (
    <div className="hidden lg:block">
        <Sidebar>
       <div className="flex w-full  items-center justify-between border-b border-b-secondary-200">
       <h1 className="font-bold mr-2 text-2xl">لیست بلاگ ها</h1>
        <ButtonIcon
          onClick={onClose}
          className="block lg:hidden border-none"
          variant="outline"
        >
          <XMarkIcon />
        </ButtonIcon>
       </div>
        <CustomNavLink  to="blogs">
            <span>همه</span>
          </CustomNavLink>
        {categories.map((c) => (
          <CustomNavLink key={c._id} to={`categoryBlogs/${c.slug}`} >
            <span>{c.title}</span>
          </CustomNavLink>
        ))}
      </Sidebar>
    </div>
  )
}

export default BlogsSidebar
