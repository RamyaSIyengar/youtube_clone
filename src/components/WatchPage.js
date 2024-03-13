import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import { formatNumber } from "../utils/helper";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import Like from "./Like";

// import {} from "../utils/videoSlice";

const WatchPage = () => {
  // to collapse the sidebar we will dispatch an action and that to only once so useEffect
  //to read the video id and show the video we will use useParams, initially it shows empty
  //bcz there no / in url, it is ?v=, instead use

  // const params = useParams();

  const selectedVideo = useSelector((store) => store.video);
  console.log(selectedVideo);
  // if (!snippet) return null;

  const { snippet } = selectedVideo?.video?.snippet;

  const [searchParams] = useSearchParams();

  console.log(searchParams.get("v"));
  // https://example.com/?name=Jonathan&age=18 for this use get(name)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className=" flex flex-col w-full p-4 pl-4">
      <div className=" flex w-full">
        <div className="mx-5 my-2 rounded-xl">
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

      <h1 className="pl-4 text-justify font-bold text-2xl w-[1000px]">
        {selectedVideo?.video?.snippet?.title}
      </h1>
      <div className="flex">
        <img
          className="w-12 my-4 ml-4 h-12  rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDof-q38vc7Z7_hke2gXzbzrPHEkO25JaIdQ&s"
        />
        <p className="my-3 py-2 font-semibold text-xl ">
          {selectedVideo?.video?.snippet?.channelTitle}
        </p>

        <button className="p-2 m-2 bg-black text-white rounded-s-3xl rounded-e-3xl">
          Subscribe
        </button>
        <div>
          <Like selectedVideo={selectedVideo} />
        </div>
      </div>

      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
