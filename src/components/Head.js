import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  console.log(suggestions);

  useEffect(() => {
    //API call
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log("API Call made" + " " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();

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
            🔍
          </button>
          <button>
            <img
              alt="microphone"
              className="h-6  px-2 mx-2 "
              src="https://static.vecteezy.com/system/resources/previews/013/658/851/original/mic-microphone-record-speak-clip-art-icon-vector.jpg"
            />
          </button>
        </div>

        {showSuggestions && (
          <div className="fixed mx-36   w-[34%] bg-white shadow-2xl rounded-lg">
            <ul className="pt-4">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-1 px-8  font-semibold hover:bg-gray-100"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 flex mx-2 my-1">
        <img
          className="h-8 "
          alt="bellIcon"
          src="https://static.thenounproject.com/png/3750242-200.png"
        />
        <img
          className="h-7 mx-4"
          alt="bellIcon"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/359/770/small/bell-icon-free-vector.jpg"
        />
        <img
          className="h-8 "
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
