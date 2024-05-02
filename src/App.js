import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Video from './pages/video/Video.jsx'

function App() {
  const[sidebar,setSidebar]=useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
    <Routes>
      <Route path='/' element={<Home sidebar={sidebar} />}></Route>
      <Route path='video/:categoryId/:videoId' element={<Video/>}></Route>
    </Routes>
    </div>
  )
}

export default App