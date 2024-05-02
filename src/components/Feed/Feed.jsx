import React,{useEffect, useState} from 'react'
import './Feed.css'
import user_profile from '../../assets/user_profile.jpg'
import { Link } from 'react-router-dom'
import { API_KEY,value_Convertor } from '../../data'
import moment from 'moment'

function Feed({category}) {
     const [data,setData]=useState([]);
     const fetchData=async()=>{
          const videoListUrl=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY} `;
          await fetch(videoListUrl).then(Response=>Response.json()).then(data=>setData(data.items))
     }
     useEffect(()=>{
          fetchData()
     },[category])
  return (
       <div className='feed'>
       
       {
          data.map((item)=>{
return(
   <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
   <img src={item.snippet.thumbnails.medium.url} alt=""/>
   <div className='profile'>
 <img src={user_profile}/>
  <div>
   <h4>{item.snippet.title}</h4>
   <h5>{item.snippet.channelTitle}</h5>
   <p>{value_Convertor(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()}</p>

  </div>
   </div>
        </Link>
)
          })
     
      
     }
     </div>
  )
}

export default Feed