import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";

function HeaderMenu({ user }) {
  return (
    <div className="flex flex-row-reverse justify-between items-center w-full">
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
  );
}

export default HeaderMenu;
