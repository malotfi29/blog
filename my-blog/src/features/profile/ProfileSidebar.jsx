import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeftStartOnRectangleIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import SidebarNav from "./SidebarNav";
import ButtonIcon from "../../ui/ButtonIcon";
import useLogout from "../auth/useLogout";
import { useEffect } from "react";
import usegetUser from "../auth/useProfile";
import { useQueryClient } from "@tanstack/react-query";

function ProfileSidebar({ onClose }) {
  const queryClient = useQueryClient();
  const navigate=useNavigate()
  const { logout } = useLogout();
  const logoutHandler=()=>{
logout()
queryClient.removeQueries(),
      navigate("/",{replace:true})
  }
  

  return (
    <div className=" px-6 text-secondary-700 overflow-y-auto flex flex-col  h-screen mt-3 ">
      <div className="flex w-full  items-center justify-between border-b border-b-secondary-200">
        <Link
          to="/"
          className="flex items-center justify-center gap-x-2  pt-4 py-2"
        >
          <HomeIcon className="w-5 h-5" />
          <span className="mt-1">ریکت بلاگ</span>
        </Link>
        <ButtonIcon
          onClick={onClose}
          className="block lg:hidden border-none"
          variant="outline"
        >
          <XMarkIcon />
        </ButtonIcon>
      </div>
      <div className="overflow-y-auto flex-auto">
        <SidebarNav />

        <div
          onClick={logoutHandler}
          className="flex items-center gap-x-2 rounded-2xl font-medium transition-all duration-200 text-secondary-700 py-5 px-4 hover:text-red-400 cursor-pointer"
        >
          <ArrowLeftStartOnRectangleIcon className="ml-4 h-5 w-5" />
          <span>خروج</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileSidebar;
