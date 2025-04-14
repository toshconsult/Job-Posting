import { useContext, useState } from "react"
import "../components/Navbar.css"
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import Sidebar from "./SideBar";

const NavBar = () => {
 const {user} = useContext(UserContext);
// console.log(user?.username);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
  <div>
    <div>
      <div className="containerr">
        {/* {Logo section} */}
        
        
          <Link to='/' className="text">
          <p className="air">THEBEST</p>
          <span className="span">PRICE</span>
          </Link>
       
        {/* Menu Section */}
        { user ? (
        <div className="menuList">
          <ul className="ul">
            {/* <li className="li home-activ">Account Info.</li> */}
            <li className="li"><Link to='/all-task'>Tasks</Link></li>
            <li className="li">About Us</li>
            <li className="li"><Link to='/settings'>Settings</Link> </li>
            {/* <li className="li">Give Feedback</li> */}
            {/* <li className="li">FAQ</li> */}
            {/* <li className="li">Check Update</li> */}
          </ul>
        </div>
        ) : ''}
        {/* Icons Section */}
        <div className="button">
          <Link to='/' className="btn"><input className="input" type="search" name="" id="" placeholder="Search" /><i class="fa fa-search"></i></Link>
          {
            user? (
              <Link to={user?.userType === "client"? '/client-dashboard' : '/dashboard'} className="logo"><i class="fa fa-user"></i>{user?.username}</Link>

            ):
            (
            <>
            <Link to='/account-type' className="sign"><i class="fa fa-sign-in"></i>Register</Link>
            <Link to='/login' className="logo"><i class="fa fa-user"></i>Log in</Link>
            </>
            )
          }
        </div>  
        
        {/* Mobile hamburger Menu section */}
        <button className="ham" onClick={handleClick}><i class="fa fa-bars"></i></button>
      </div>
    </div>

    <div className={open ? "bg active" : "bg"}>
     <button className="close" onClick={handleClick}><i class="fa fa-times"></i></button>
      <div className="mobile">
    
        <div className="menuList">
            <ul className={open ? "ul active" : "ul"}>
            <li className="li"><Link to='/all-task'>Tasks</Link></li>
            <li className="li">About Us</li>
            <li className="li"><Link to='/settings'>Settings</Link> </li>
              {/* <li className="li">Give Feedback</li>
              <li className="li">FAQ</li>
              <li className="li">Check Update</li> */}
            </ul>
          </div>
          <div className={open ? "button active" : "button"}>
            <button className="btn"><i class="fa fa-search"></i></button>
            {
            user? (
            <Link to={user?.userType === "Client"? '/client-dashboard' : '/dashboard'} className="logo"><i class="fa fa-user"></i>{user?.username}</Link>

            ):
            (
            <>
            <Link to='/account-type' className="sign"><i class="fa fa-sign-in"></i>Register</Link>
            <Link to='/login' className="logo"><i class="fa fa-user"></i>Log in</Link>
            </>
            )
          }
          </div>
        </div>
    </div>
    {/* mobile sidebar section */}
    <div>
          
    </div>
  </div>
  )
}

export default NavBar