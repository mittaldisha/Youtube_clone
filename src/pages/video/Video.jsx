import React from 'react'
import './Video.css'
import PlayVideo from '../../components/PlayVideo/PlayVideo'
import Recommended from '../../components/Recommended/Recommended'
import { useParams } from 'react-router-dom'



function Video() {
  const {videoId,categoryId}=useParams();
 

  return (
    <>
    <div className='content'>

    <PlayVideo videoId={videoId}/>
   <Recommended categoryId={categoryId} videoId={videoId}/>
    </div>
    </>
  )
}

export default Video