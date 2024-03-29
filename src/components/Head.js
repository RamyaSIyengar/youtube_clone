import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import store from "../utils/store";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  // console.log(suggestions);
  //read the cache
  const searchCache = useSelector((store) => store.search);

  /**
   * searchcache= {
   * "iphone": ["iphone 13", "iphone pro max"]
   * }
   */
  useEffect(() => {
    //API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]); // if searchQuery is present in store drectly get it from there or else make an api call to fetch it and update the cache
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API Call made" + " " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    //updating the cache
    dispatch(
      cacheResults({
        //object
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 mx-4 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=256"
        />
        <a href="/">
          <img
            className="h-8 cursor-pointer"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          />
        </a>
      </div>

      <div className="col-span-11">
        <div>
          <input
            className="w-[50%] h-10 border border-gray-500 rounded-l-full pl-10 ml-36"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          ></input>

          <button className="border h-10 bg-gray-100 border-gray-500 rounded-r-full px-5 py-2">
            <SearchIcon />
          </button>
          <button className="p-2 mx-2 bg-gray-100 rounded-full">
            <KeyboardVoiceIcon fontSize="medium" />
          </button>
        </div>

        {showSuggestions && (
          <div className="fixed  mx-36  my-9 w-[34%] bg-white shadow-2xl rounded-lg">
            <ul className="pt-4">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className=" px-8  font-semibold hover:bg-gray-100"
                >
                  <SearchIcon /> {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 flex mx-2 my-1 justify-around">
        <VideoCallOutlinedIcon fontSize="large" />
        <NotificationsNoneOutlinedIcon fontSize="large" />
        <AccountCircleIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Head;
