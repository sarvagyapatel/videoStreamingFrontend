import { Link, useLocation } from "react-router-dom";
import Comment from "../components/comment/Comment";
import AddComment from "../components/addComment/AddComment";
import VideoContainer from "../components/videoContainer/VideoContainer";
import VideoDetails from "../components/videodetails/VideoDetails";
import { getAllVideos, updateViews } from "../service/videos";
import { useCallback, useEffect, useState } from "react";
import TitleCommentContainer from "../components/container/TitleCommentContainer";
import Button from "../components/button/Button";
import { BiSolidLike } from "react-icons/bi";
import { formatDistanceToNow } from "date-fns";
import { LuDot } from "react-icons/lu";
import { getlikeStatus, toggleLike, totalLikes } from "../service/like";
import { isSubscribed, subscribe } from "../service/subscription";

function VideoPage() {
  const location = useLocation();
  const { video } = location.state || {};
  const [likeStatus, setLikeStatus] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [videos, setVideos] = useState([]);
  const [subscribed, setSubscribed] = useState(false);

  const subscriptionStatus = async () => {
    try {
      const response = await isSubscribed(video.owner);
      setSubscribed(response);
    } catch (error) {
      console.log(error);
    }
  };

  const subscribeChannel = async () => {
    try {
      await subscribe(video.owner);
      subscriptionStatus();
    } catch (error) {
      console.log(error);
    }
  };

  const likeTheVideo = async () => {
    try {
      await toggleLike(video._id);
      setLikeStatus((like) => !like);
      noOfLikes();
    } catch (error) {
      console.log(error);
    }
  };

  const noOfLikes = async () => {
    try {
      const response = await totalLikes(video._id);
      setLikesCount(response.likes);
    } catch (error) {
      console.log(error);
    }
  };

  const checkLikeStatus = async () => {
    try {
      const response = await getlikeStatus(video._id);
      setLikeStatus(response);
    } catch (error) {
      console.log(error);
    }
  };

  const incrementViews = useCallback(async () => {
    try {
      await updateViews(video._id);
    } catch (error) {
      console.log(error);
    }
  }, [video]);

  useEffect(() => {
    subscriptionStatus();
    noOfLikes();
    checkLikeStatus();
    const fetchVideos = async () => {
      try {
        const response = await getAllVideos();
        setVideos(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideos();
    incrementViews();
  }, [video]);

  if (!video) {
    return <div>No video data available</div>;
  }

  return (
    <div className="w-full h-full items-center justify-center text-white">
      <div className="2xl:w-full 2xl:flex items-center justify-center 2xl:bg-black">
        <div className="2xl:w-2/3 h-full 2xl:flex items-center justify-center ">
          <VideoContainer video={video} />
        </div>
      </div>
      <div className="flex max-[1535px]:flex-col items-start justify-around gap-0">
        <div className="flex flex-col items-start justify-start w-fit h-full mt-4 px-4">
          <div className="w-fit h-fit p-2">
            <h1 className="text-3xl font-semibold">{video.title}</h1>
          </div>
          <div className="flex items-start mt-4 2xl:w-[1130px]  max-[1530px]:w-full justify-between">
            <div className="flex gap-6">
              <div className="">
                <TitleCommentContainer video={video} videoId={video._id} />
              </div>
              <div>
                <Button
                  buttonText={subscribed ? "Subscribed" : "Subscribe"}
                  className={`p-2 px-3  ${
                    subscribed ? "bg-neutral-800" : "bg-red-700"
                  } rounded-xl`}
                  onClick={subscribeChannel}
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-3xl p-1 px-2 rounded-xl bg-neutral-800">
              <BiSolidLike
                onClick={likeTheVideo}
                className={`${
                  likeStatus ? "text-blue-700" : ""
                } cursor-pointer`}
              />
              <h1 className="text-xl font-semibold">{likesCount}</h1>
            </div>
          </div>
          <div className="flex-col items-start justify-start gap-4 mt-4 p-4 bg-neutral-800 rounded-xl 2xl:w-[1130px]  max-[1530px]:w-full">
            <div className="flex flex-row items-start justify-start -mt-2">
              <p>{`${video.views} views`}</p>
              <LuDot className="text-3xl" />
              <p>
                {formatDistanceToNow(new Date(video.createdAt), {
                  addSuffix: true,
                })}
              </p>
            </div>
            <p>{video.description}</p>
          </div>
          <div className="flex flex-col ">
            <AddComment videoId={video._id} userId={video.owner} />
            <Comment videoId={video._id} />
          </div>
        </div>
        <div className="flex-col w-fit items-center justify-center gap-4 mt-4">
          {videos.map((video) => (
            <div key={video._id} className="w-fit h-fit">
              <Link to="/video" state={{ video }}>
                <VideoDetails video={video} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default VideoPage;
