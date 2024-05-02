import React, { useState, useEffect } from 'react';
import './PlayVideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import { API_KEY, value_Convertor } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

function PlayVideo() {
  const {videoId}=useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  const YOUTUBE_API_ROUTE_V3 = 'https://youtube.googleapis.com/youtube/v3';
  const fetchVideoData = () => {
    const videoDetails_Url = `${YOUTUBE_API_ROUTE_V3}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}  `;
    console.log(videoDetails_Url);
    fetch(videoDetails_Url)
      .then((Response) => Response.json())
      .then((data) => setApiData(data.items[0]))
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchOtherData = async () => {
    const channelData_Url = `${YOUTUBE_API_ROUTE_V3}/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet?.channelId}&key=${API_KEY}`;

    fetch(channelData_Url)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.items) setChannelData(data?.items[0]);
      });

    console.log(channelData_Url);
    const comment_Url = `${YOUTUBE_API_ROUTE_V3}/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;

    console.log(videoId, API_KEY);

    await fetch(comment_Url)
      .then((Response) => Response.json())
      .then((data) =>
        // if(data&& data.items)
        setCommentData(data.items)
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className='Play-Container'>
      {/* <video src={video} controls autoPlay muted/> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerpolicy='strict-origin-when-cross-origin'
        allowfullscreen
      ></iframe>
      <h2>{apiData ? apiData.snippet.title : 'Title here'}</h2>

      <div className='channel'>
        <div className='channel-main'>

        <img src={channelData ? channelData.snippet.thumbnails.default.url : ''} alt='' />
        <div className='channel-info'>
          <h4>{apiData ? apiData.snippet.channelTitle : 'Title here'}</h4>
          <h5>
            {value_Convertor(channelData ? channelData.statistics.subscriberCount : '1M')} 
          </h5>
        </div>

        <button>Subscribe</button>
        </div>
        <div className='video-icons'>
          <div className='icon'>
            <img src={like} alt='' />
            {value_Convertor(apiData ? apiData.statistics.likeCount : 455)}
          </div>
          <div className='icon'>
            <img src={dislike} alt='' />
          </div>
          <div className='icon'>
            <img src={share} alt='' />
            share
          </div>
          <div className='icon'>
            <img src={save} alt='' />
            Download
          </div>
        </div>
      </div>
      <div className='More-about-channel'>
        {value_Convertor(apiData ? apiData.statistics.viewCount : 34)} views&bull;{' '}
        {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ''}
        <p> {apiData ? apiData.snippet.description.slice(0, 250) : 'Description Here'}</p>
      </div>
      <hr />
      <div>
        <p>{value_Convertor(apiData ? apiData.statistics.commentCount : 43)} Comments</p>
        {commentData.map((item, index) => {
          return (
            <div className='comment-user' key={index}>
              <div>
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt='' />
              </div>
              <div>
                <div className='user-profile'>
                  <h5>{item.snippet.topLevelComment.snippet.authorDisplayName}</h5>
                  <p>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</p>
                </div>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className='comment-icon'>
                  <span>
                    {' '}
                    <img src={like} alt='' />
                    {value_Convertor(item.snippet.topLevelComment.snippet.likeCount)}
                  </span>
                  <span>
                    <img src={dislike} alt='' />
                  </span>
                  <h5>Reply</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlayVideo;
