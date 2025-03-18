import { useState } from "react"
import "../components/Navbar.css"

const NavBar = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
  <div>
    <div>
      <div className="containerr">
        {/* {Logo section} */}
        <div className="text">
          <p className="air">THEBEST</p>
          <span className="span">PRICE</span>
        </div>
        {/* Menu Section */}
        <div className="menuList">
          <ul className="ul">
            <li className="li home-activ">Account Info.</li>
            <li className="li">About Us</li>
            <li className="li">Settings</li>
            <li className="li">Support</li>
            <li className="li">Give Feedback</li>
            <li className="li">FAQ</li>
            <li className="li">Check Update</li>
          </ul>
        </div>
        {/* Icons Section */}
        <div className="button">
          <button className="btn"><input className="input" type="search" name="" id="" placeholder="Search" /><i class="fa fa-search"></i></button>
          <button className="sign"><i class="fa fa-sign-in"></i>Sign in</button>
          <button className="logo"><i class="fa fa-user"></i>Logo in</button>
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
              <li className="li home-active">Account Info.</li>
              <li className="li">About Us</li>
              <li className="li">Settings</li>
              <li className="li">Support</li>
              <li className="li">Give Feedback</li>
              <li className="li">FAQ</li>
              <li className="li">Check Update</li>
            </ul>
          </div>
          <div className={open ? "button active" : "button"}>
            <button className="btn"><i class="fa fa-search"></i></button>
            <button className="sign"><i class="fa fa-sign-in"></i>Sign in</button>
            <button className="logo"><i class="fa fa-user"></i>Logo in</button>
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