import React, { useState } from 'react'
import './Home.css'
import SideBar from '../../components/sideBar/SideBar'
import Feed from '../../components/Feed/Feed'

function Home({sidebar}) {
  const [category,setCategory]=useState(0);
  return (
    <>
     <SideBar sidebar={sidebar} category={category} setCategory={setCategory}/>
     <div className={`container ${sidebar?"":"large-container"}`}>
     <Feed category={category} />

     </div>
    </>
  )
}

export default Home