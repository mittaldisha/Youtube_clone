import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './Recommended.css';
import { API_KEY, value_Convertor } from '../../data';
import { Link } from 'react-router-dom';

function Recommended({ categoryId }) {
  const [apiData,setApiData]=useState([]);
  const RecommendedData_Url = ` https://youtube.googleapis.com/youtube/v3`;
const fetchingData=async()=>{
  const Url = `${RecommendedData_Url}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
  await fetch(Url).then(res=>res.json()).then(data=>{
   setApiData(data.items)}) 
}
useEffect(()=>{
  fetchingData();
},[])
  return (
    <div className='recommended'>
{apiData &&  apiData.map((item,index)=>{
  return (
    <Link
      to={`/video/${item.snippet.categoryId}/${item.id}`}
      key={index}
      className='recommended-info'
    >
      <img src={item.snippet.thumbnails.medium.url} alt='' />
      <div className='recommended-list'>
        <h4>{item.snippet.title} </h4>
        <p>{item.snippet.channelTitle}</p>
        <p>
          {value_Convertor(item.statistics.viewCount)} &bull;{' '}
          {moment(item.snippet.publishedAt).fromNow()}
        </p>
      </div>
    </Link>
  );
})}
        
          
        
    </div>
  );
}

export default Recommended;
