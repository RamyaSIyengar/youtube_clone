import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEOS_API} from "../utils/constants"
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
const [videos, setVideos] = useState([]);
// const [error, setError] = useState(null);

useEffect(() => {
   fetchVideos();
}, []);

const fetchVideos = async () => {
  const data = await fetch(YOUTUBE_VIDEOS_API)
  const json = await data.json();
  // console.log(json.items)
  setVideos(json.items)
  
}
console.log(videos)

  // if(videos.length === 0) return null;

  return (
    <div className=' w-full m-2'>
       <div className=' m-8   flex flex-wrap '>
       {videos.map((video) => (
       <Link to={"/watch?v="+video.id}><VideoCard key={video.id} info={video} /></Link> 
       ))}
       </div>
       
   </div>
  )
}

export default VideoContainer