import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setVideoContent } from "../utils/videoSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  // const [error, setError] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items)
    setVideos(json.items);
  };
  // console.log(videos);

  const handleLinkClick = (video) => {
    dispatch(setVideoContent(video));
  };

  return (
    <div className=" w-full m-2">
      <div className=" m-8   flex flex-wrap ">
        {videos.map((video) => (
          <Link
            to={"/watch?v=" + video.id}
            key={video.id}
            onClick={() => handleLinkClick(video)}
          >
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
