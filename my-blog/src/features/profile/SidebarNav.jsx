import {
  ChatBubbleBottomCenterIcon,
  DocumentTextIcon,
  RectangleGroupIcon,
  Squares2X2Icon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const sidebarNavs = [
  {
    id: 1,
    title: "داشبورد",
    icon: <RectangleGroupIcon className="w-5 h-5" />,
    href: "/profile",
  },

  {
    id: 2,
    title: "پست ها",
    icon: <DocumentTextIcon className="w-5 h-5" />,
    href: "/profile/posts",
  },
  {
    id: 3,
    title: "نظرات",
    icon: <ChatBubbleBottomCenterIcon className="w-5 h-5" />,
    href: "/profile/comments",
  },
  {
    id: 4,
    title: "دسته بندی ها",
    icon: <Squares2X2Icon className="w-5 h-5" />,
    href: "/profile/categories",
  },
  {
    id: 5,
    title: "کاربران",
    icon: <UsersIcon className="w-5 h-5" />,
    href: "/profile/users",
  },
];

function SidebarNav() {
  return (
    <ul className="space-y-4 mt-6">
      {sidebarNavs.map((nav) => {
        return (
          <li  key={nav.id} className="  ">
            <Link
              to={nav.href} className="flex items-center gap-x-2 py-3 hover:bg-primary-100/40 hover:text-primary-900 rounded-2xl font-medium  transition-all duration-200 text-secondary-700  px-4"
              
            >
              <span>{nav.icon}</span>
              <span>{nav.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SidebarNav;
