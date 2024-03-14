import React from "react";
import Shimmer from "./Shimmer";
import { formatNumber } from "../utils/helper";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;

  // console.log(snippet + statistics)

  return snippet.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-2  w-80  mr-10 my-4 shadow-lg">
      <img
        alt="thumbnail"
        className="rounded-lg "
        src={thumbnails.medium.url}
      />

      <ul className="">
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{formatNumber(viewCount)}Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
