import React from 'react'
import menu_icon from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search.png"
import upload_icon from "../../assets/upload.png"
import more_icon from "../../assets/more.png"
import notification_icon from "../../assets/notification.png"
import profile_icon from "../../assets/profile.jpeg"
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar({setSidebar}) {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='menu_icon' src={menu_icon} onClick={()=>setSidebar(prev=>prev===false?true:false)} alt=""/>
      <Link to='/'><img className='logo' src={logo} alt="logo" /></Link>  
          </div> 
          <div className='nav-middle flex-div'>
            <div className='search flex-div'>
            <input type="text" placeholder='Search'/>
            <img className="search_icon" src={search_icon} alt=""/>
            </div>
            </div> 
            <div className='nav-right flex-div'>
               <img className='upload_icon' src={upload_icon} alt=""/>
            <img className='more_icon' src={more_icon} alt=""/>
            <img className='notification_icon' src={notification_icon} alt=""/>
            <img className='profile_icon' src={profile_icon} alt="" height="100px"/>
            </div>
    </nav>
  )
}

export default Navbar