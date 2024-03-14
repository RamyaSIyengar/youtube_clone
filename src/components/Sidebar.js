import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="w-80 pr-20 pl-5  justify-between shadow-lg ">
      <Link to={"/"}>
        <h1 className=" cursor-pointer py-3 hover:bg-gray-100 rounded-lg ">
          <HomeIcon />
          <label className="px-2">Home</label>
        </h1>
      </Link>
      <h1 className=" cursor-pointer py-3 hover:bg-gray-100 rounded-lg">
        <VideocamRoundedIcon />
        <label className="px-2">Shorts</label>
      </h1>
      <h1 className=" cursor-pointer py-3 hover:bg-gray-100  rounded-lg flex  ">
        <OndemandVideoRoundedIcon />
        <label className="px-2">Subscriptions</label>
      </h1>


      <div className="border-b border-gray-300 my-4"></div>

      <h1 className=" cursor-pointer font-semibold text-lg my-4">You <ArrowForwardIosRoundedIcon /></h1>
      <ul className=" cursor-pointer ">
        <li className="my-3  hover:bg-gray-100 rounded-lg">
          <PortraitOutlinedIcon />
          <label className="p-2  mb-4">Your channel</label></li>
        <li className="my-3 hover:bg-gray-100 rounded-lg"><UpdateOutlinedIcon />
          <label className="p-2">History</label></li>
        <li className="my-3 hover:bg-gray-100 rounded-lg"><SmartDisplayOutlinedIcon />
          <label className="p-2">Your videos</label></li>
        <li className="my-3 hover:bg-gray-100 rounded-lg"><TimerOutlinedIcon />
          <label className="p-2">Watch later</label></li>
        <li className=" my-3 hover:bg-gray-100 rounded-lg"><ContentCutOutlinedIcon />
          <label className="p-2">Your clips</label></li>
        <li className="my-3 hover:bg-gray-100 rounded-lg"><ThumbUpOutlinedIcon />
          <label className="p-2">Liked videos</label></li>
      </ul>

      {/* <h1 className=" cursor-pointer font-semibold text-lg my-4">Explore  <ArrowForwardIosRoundedIcon /></h1> */}
      <ul className="my-4  cursor-pointer ">
        <li className=" hover:bg-gray-100 rounded-lg my-3"><MovieFilterOutlinedIcon />
          <label className="p-2">Movies</label></li>
        <li className=" hover:bg-gray-100 rounded-lg my-3"><LocalFireDepartmentOutlinedIcon />
          <label className="p-2">Trending</label></li>
        <li className=" hover:bg-gray-100 rounded-lg my-3"><ShoppingBagOutlinedIcon />
          <label className="p-2">Shopping</label></li>
        <li className=" hover:bg-gray-100 rounded-lg my-3"><MusicNoteOutlinedIcon />
          <label className="p-2">Music</label></li>
        <li className=" hover:bg-gray-100 rounded-lg my-3"><PodcastsOutlinedIcon />
          <label className="p-2">Live</label></li>
        <li className=" hover:bg-gray-100 rounded-lg my-3s"><SportsEsportsOutlinedIcon />
          <label className="p-2">Gaming</label></li>
      </ul>
    </div>
  );
};

export default Sidebar;
