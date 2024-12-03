import { Outlet } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar"
import ProfileHeader from "./ProfileHeader"
import Dashboard from "./Dashboard"


function ProfileLayout() {
  return  <div className="bg-secondary-0">
  <div className="grid grid-cols-12 h-screen">
      <aside className="col-span-12 lg:col-span-3 xl:col-span-2 hidden lg:block">
          <ProfileSidebar/>
      </aside>
      <div className="col-span-12 lg:col-span-9 xl:col-span-10 h-screen flex flex-col">
          <ProfileHeader/>
          <div className="bg-secondary-100 rounded-tr-3xl p-4 md:p-6 lg:p-10 flex-1 overflow-y-auto">
            <div className="xl:max-w-screen-xl">
            {/* <Dashboard/> */}
            <Outlet/>
            </div>
        </div>
          
      </div>
  </div>
    </div>;
}

export default ProfileLayout
