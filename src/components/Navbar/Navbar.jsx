import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom';
import { Storecontext } from '../../context/Storecontext';



const Navbar = ({setShowLogin}) => {

    const[menu,setmenu] = useState("menu");
    const {getTotalCartAmount} = useContext(Storecontext);
  
  return (
    <div className='Navbar'>

   <Link to='/'> <img src={assets.logo} alt="" /></Link>

    <ul className="navbar-menu">
        <Link to='/' onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setmenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</a>
        <a href='#footer' onClick={()=>setmenu("contact")}className={menu==="contact"?"active":""}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div  className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)} >Sign In</button>
      </div>
         
         

      
    </div>
  )
}

export default Navbar


