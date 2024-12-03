import { Link } from "react-router-dom";
import HeaderMenu from "../../ui/HeaderMenu";
import usegetUser from "../auth/useProfile";
import { HiOutlineUser } from "react-icons/hi";
import ButtonIcon from "../../ui/ButtonIcon";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Drawer from "./Drawer";
import ProfileSidebar from "./ProfileSidebar";

function ProfileHeader() {
  const { user, isLoading } = usegetUser();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  return (
    <div className="py-4 container border-secondary-200 flex flex-row-reverse items-center justify-between w-full bg-secondary-0 ">
      <div
        className={` xl:max-w-screen-lg flex items-center justify-end gap-x-8
      ${isLoading ? "blur-sm opacity-50" : ""}`}
      >
        <div className="flex">
          {user ? (
            <Link to="/profile" className="flex flex-row-reverse">
              <HiOutlineUser className="w-5 h-5 text-primary-900" />
              <span className="text-secondary-600">{user.name}</span>
            </Link>
          ) : (
            <Link to="/signin">
              {" "}
              <span>ورود</span>{" "}
            </Link>
          )}
        </div>
      </div>
      <ButtonIcon
        className="block lg:hidden border-none"
        variant="outline"
        onClick={() => setIsOpenDrawer(!isOpenDrawer)}
      >
        {isOpenDrawer ? <XMarkIcon /> : <Bars3Icon />}
      </ButtonIcon>

      <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
          <ProfileSidebar onClose={() => setIsOpenDrawer(false)} />
        </Drawer>
    </div>
  );
}

export default ProfileHeader;
