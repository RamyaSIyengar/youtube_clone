import React, { useState } from "react";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ShareIcon from "@mui/icons-material/Share";
import { Modal } from "@mui/material";
import { useSelector } from "react-redux";
import { formatNumber } from "../utils/helper";

const Like = ({ selectedVideo }) => {
  console.log(selectedVideo);
  const { viewCount, likeCount } = selectedVideo?.video?.statistics || {};
  const [likes, setLikes] = useState(likeCount);
  const [dislike, setDislike] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(likes);

  const handleLike = () => {
    setLikes((likes) => Number(likes + 1));
  };

  const handleDislike = () => {
    // Implement dislike logic if needed
    setDislike((dislike) => Number(dislike) + 1);
  };

  const handleShare = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex justify-between p-2 m-2 ml-[20rem]">
      {/* <div className="flex col-span-1 font-bold text-gray-800">
        {formatNumber(viewCount)}Views
      </div> */}
      <div>
        <button
          onClick={handleLike}
          className="px-3 py-1 bg-gray-100 text-black hover:bg-gray-200 rounded-l-full"
        >
          <ThumbUpAltOutlinedIcon fontSize="large" /> {formatNumber(likeCount)}
        </button>
        <button
          onClick={handleDislike}
          className="px-3 py-1 bg-gray-100 mr-2 text-black hover:bg-gray-200 rounded-r-full"
        >
          <ThumbDownAltOutlinedIcon fontSize="large" /> {dislike}
        </button>
        <button
          onClick={() => handleShare()}
          className="px-3 py-1 bg-gray-100 text-black hover:bg-gray-200 rounded-full"
        >
          <ShareIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};

export default Like;
