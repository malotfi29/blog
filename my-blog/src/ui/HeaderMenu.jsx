
import {HiOutlineUser} from "react-icons/hi"
import {Link} from "react-router-dom"
import usegetUser from "../features/auth/useProfile"
// import DarkModeToggle from "./DarkModeToggle"
// import Logout from "../features/authenticateion/Logout"


  
 
 


function HeaderMenu({user}) {
  
 
  
  
  return (
    <ul className="flex gap-x-4 items-center">
        <li className="flex">
            {user ? <Link to="/profile" className="flex flex-row-reverse">
            <HiOutlineUser className="w-5 h-5 text-primary-900"/>
            <span className="text-secondary-600">{user.name}</span>
            </Link> : <Link to="/signin"> <span>ورود</span> </Link>} 
        </li>
        <li className="flex">
            {/* <DarkModeToggle/> */}
            dark mode
        </li>
       
    </ul>
  )
}

export default HeaderMenu
