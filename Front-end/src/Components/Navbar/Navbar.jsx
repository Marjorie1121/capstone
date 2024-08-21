import React, { useState, useContext, useRef, useEffect } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'


const Navbar = () => {

  const [menu, setMenu] = useState("Shop");
  const [user, setUser] = useState()
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef= useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  //when the page loads
  useEffect(() => {
    const local_user = localStorage.getItem("user");
    if (local_user) {
      setUser(JSON.parse(local_user));
    }
  }, [])


  const onLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("auth-token");
    window.location.replace("/");

  }
  

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt=" " />
        <p>K-Beauty</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("Shop") }}><Link style={{ textDecoration: 'none'}} to = '/'>Shop</Link>{menu === "Shop" ? <hr/> : <></>}</li>
        <li onClick={() => { setMenu("Face Cleansers") }}><Link style={{ textDecoration: 'none'}} to = '/Face-Cleansers'>Face Cleansers</Link>{menu === "Face Cleansers" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("Serums") }}><Link style={{ textDecoration: 'none'}} to = '/Serums'>Serums</Link>{menu === "Serums" ? <hr/> : <></>}</li>
        <li onClick={() => { setMenu("Toners") }}><Link style={{ textDecoration: 'none'}} to = '/Toners'>Toners</Link>{menu === "Toners" ? <hr/> : <></>}</li>
        <li onClick={() => { setMenu("Moisturizers") }}><Link style={{ textDecoration: 'none'}} to = '/Moisturizers'>Moisturizers</Link>{menu === "Moisturizers" ? <hr/> : <></>}</li>

      </ul>
      <div className="nav-login-cart">
        <p>{user ? <button onClick={onLogout}>logout</button> : <Link to = '/login'>Login</Link>}</p>
        
         {user ? (
          <>
          <Link to='/Cart'><img src={cart_icon} alt=" " /></Link> 
          <div className="nav-cart-count">{getTotalCartItems()}</div>
          </>
         ) : null}
      </div>
    </div>
  )
}

export default Navbar
