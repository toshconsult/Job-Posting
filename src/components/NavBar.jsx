import {  useEffect, useState } from "react"
import "../components/Navbar.css"
import { Link } from "react-router-dom";
import useUserStore from "./context/Store";

import Modal from "./Modal";
import Login from "./Accoount/Login";
import { AccountType } from "./Accoount/AccountType";

const NavBar = () => {
 const {user, getUser} = useUserStore();
// console.log(user?.username);
const [modalOpen, setModalOpen] = useState(false);
const [modalType, setModalType] = useState(null); 

  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  }
  
  useEffect(() => {
    getUser()
  }, [getUser])

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
           
          </ul>
        </div>
        ) : ''}
        {/* Icons Section */}
        <div className="button">
         
          {
            user? (
              <Link to={user?.userType === "client"? '/client-dashboard' : user?.userType === "admin" ? '/admin-dashboard'  : '/dashboard'} className="logo"><i class="fa fa-user"></i>{user?.username}</Link>

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
            
            </ul>
          </div>
          <div className={open ? "button active " : "button"}>
           
            {
            user? (
            <Link to={user?.userType === "client"? '/client-dashboard' : user?.userType === "admin" ? '/admin-dashboard'  : '/dashboard'} className="logo"><i class="fa fa-user"></i>{user?.username}</Link>

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