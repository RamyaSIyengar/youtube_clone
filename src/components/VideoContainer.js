import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEOS_API} from "../utils/constants"
import VideoCard from './VideoCard';

const VideoContainer = () => {
const [videos, setVideos] = useState([]);
// const [error, setError] = useState(null);

useEffect(() => {
   fetchVideos();
}, []);

const fetchVideos = async () => {
  const data = await fetch(YOUTUBE_VIDEOS_API)
  const json = await data.json();
  console.log(json.items)
  setVideos(json.items)
  
}
console.log(videos)
  return (
    <div>
          <VideoCard info={videos[0]}/>


    
    </div>
  )
}

export default VideoContainer