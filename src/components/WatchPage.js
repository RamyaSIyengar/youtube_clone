import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  // to collapse the sidebar we will dispatch an action and that to only once so useEffect
  //to read the video id and show the video we will use useParams, initially it shows empty
  //bcz there no / in url, it is ?v=, instead use

  // const params = useParams();
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("v"));
  // https://example.com/?name=Jonathan&age=18 for this use get(name)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className=" flex flex-col w-full ">
      <div className="p-5 flex w-full">
        <div className="m-5 rounded-xl">
          <iframe
            width="1000"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>

      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
