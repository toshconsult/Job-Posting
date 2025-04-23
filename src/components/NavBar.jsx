import { useContext, useState } from "react"
import "../components/Navbar.css"
import { Link } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import Modal from "./Modal";
import Login from "./Accoount/Login";
import SignUp from "./Accoount/SignUp";
import { AccountType } from "./Accoount/AccountType";

const NavBar = () => {
 const {user} = useContext(UserContext);
// console.log(user?.username);
const [modalOpen, setModalOpen] = useState(false);
const [modalType, setModalType] = useState(null); 

  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
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
            {/* <li className="li"><Link to='/all-task'>Tasks</Link></li>
            <li className="li">About Us</li>
            <li className="li"><Link to='/settings'>Settings</Link> </li> */}
            {/* <li className="li">Give Feedback</li> */}
            {/* <li className="li">FAQ</li> */}
            {/* <li className="li">Check Update</li> */}
          </ul>
        </div>
        ) : ''}
        {/* Icons Section */}
        <div className="button">
         
          {
            user? (
              <Link to={user?.userType === "client"? '/client-dashboard' : '/dashboard'} className="logo"><i class="fa fa-user"></i>{user?.username}</Link>

            ):
            (
            <>
             <button className="sign" onClick={()=> openModal('register')}><i class="fa fa-sign-in"></i>Register</button>
             <button className="logo" onClick={()=> openModal('login')}><i class="fa fa-user"></i>Log in</button>
            </>
            )
          }
        </div>  
        
        {/* Mobile hamburger Menu section */}
        <button className="ham" onClick={handleClick}><i class="fa fa-bars"></i></button>
      </div>
    </div>

    <div className={open ? "bg active relative" : "bg"}>
     <button className="close" onClick={handleClick}><i class="fa fa-times"></i></button>
      <div className="mobile">
    
        <div className="menuList">
            <ul className={open ? "ul active " : "ul"}>
            {/* <li className="li"><Link to='/all-task'>Tasks</Link></li>
            <li className="li">About Us</li>
            <li className="li"><Link to='/settings'>Settings</Link> </li> */}
              {/* <li className="li">Give Feedback</li>
              <li className="li">FAQ</li>
              <li className="li">Check Update</li> */}
            </ul>
          </div>
          <div className={open ? "button active " : "button"}>
           
            {
            user? (
            <Link to={user?.userType === "Client"? '/client-dashboard' : '/dashboard'} className="logo"><i class="fa fa-user"></i>{user?.username}</Link>

            ):
            (
            <>
            <button className="sign" onClick={()=> openModal('register')}><i class="fa fa-sign-in"></i>Register</button>
            <button className="logo" onClick={()=> openModal('login')}><i class="fa fa-user"></i>Log in</button>
            </>
            )
          }
          </div>
        </div>
    </div>
    {/* mobile sidebar section */}
    <div>
          
    </div>
    <Modal isOpen={modalOpen} onClose={()=> setModalOpen(false)}>
      {modalType === "login" && <Login modalOpen/>}
      {modalType === "register" && <AccountType modalOpen/>}

    </Modal>
  </div>
  )
}

export default NavBar