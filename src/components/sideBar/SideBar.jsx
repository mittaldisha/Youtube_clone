import React from 'react'
import home_Icon from'../../assets/home.png'
import blog_Icon from '../../assets/blogs.png'
import technology_Icon from '../../assets/tech.png'
import game_Icon from "../../assets/game_icon.png"
import entertainment_Icon from "../../assets/entertainment.png"
import automobile_Icon from "../../assets/automobiles.png"
import music_Icon from '../../assets/music.png'
import sport_Icon from "../../assets/sports.png"
import news_Icon from "../../assets/news.png"
import cameron_Icon from'../../assets/cameron.png'
import megan_Icon from '../../assets/megan.png'
import tom_Icon from '../../assets/tom.png'
import jack_Icon from '../../assets/jack.png'
import siman_Icon from '../../assets/simon.png'
import './SideBar.css'

function SideBar({sidebar,category,setCategory}) {
 
  return (
    <div className={`sidebar ${sidebar?"" : "small-sidebar"}`}>
        <div className='sidebar-option'>
            <div className={`sidebar-icon ${category===0? "active":""}`} onclick={()=>setCategory(0)}>
<img src={home_Icon}/><p>Home</p>
            </div>
            <div className={`sidebar-icon ${category===10? "active":""}`}onClick={()=>setCategory(10)}>
<img src={music_Icon}/><p>Music</p>
            </div>
            <div className={`sidebar-icon ${category===20? "active":""}`}onClick={()=>setCategory(20)}>
<img src={game_Icon}/><p>Gaming</p>
            </div>
            <div className={`sidebar-icon ${category===25? "active":""}`}onClick={()=>setCategory(25)}>
<img src={news_Icon}/><p>News</p>
            </div>
            <div className={`sidebar-icon ${category===17? "active":""}`}onClick={()=>setCategory(17)}>
<img src={sport_Icon}/><p>Sport</p>
            </div>
            <div className={`sidebar-icon ${category===22? "active":""}`}onClick={()=>setCategory(22)}>
<img src={blog_Icon}/><p>Blogs</p>
            </div>
            <div className={`sidebar-icon ${category===24? "active":""}`}onClick={()=>setCategory(24)}>
<img src={entertainment_Icon}/><p>Entertainment</p>
            </div>
            <div className={`sidebar-icon ${category===28? "active":""}`}onClick={()=>setCategory(28)}>
<img src={technology_Icon}/><p>Technology</p>
            </div>
            <div className={`sidebar-icon ${category===2? "active":""}`}onClick={()=>setCategory(2)}>
<img src={automobile_Icon}/><p>Automobile</p>
            </div>
            <hr/>
            <h3>Subscription</h3>
            <div className='sidebar-icon'>
<img src={cameron_Icon}/><p>Cameron</p>
            </div>
            <div className='sidebar-icon'>
<img src={tom_Icon}/><p>Tom</p>
            </div>
            <div className='sidebar-icon'>
<img src={megan_Icon}/><p>Megan</p>
            </div>
            <div className='sidebar-icon'>
<img src={siman_Icon}/><p>Siman</p>
            </div>
            <div className='sidebar-icon'>
<img src={jack_Icon}/><p>Jack</p>
            </div>
          
        </div>
    </div>
  )
}

export default SideBar