import usegetUser from "../features/auth/useProfile";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const { user, isLoading } = usegetUser();
  return (
    <div className="bg-secondary-0 py-4  border-secondary-200">
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-8
        ${isLoading ? "blur-sm opacity-50" : ""}`}
      >
        {/* <UserAvatar /> */}
        <HeaderMenu user={user} /> 
        
      </div>
    </div>
  );
}

export default Header;
