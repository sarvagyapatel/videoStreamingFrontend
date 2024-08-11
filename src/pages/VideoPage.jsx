// import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Comment from "../components/comment/Comment";
import AddComment from "../components/addComment/AddComment";
import VideoContainer from "../components/videoContainer/VideoContainer"
import VideoDetails from "../components/videodetails/VideoDetails";
import { getAllVideos } from "../service/videos";
import { useEffect, useState } from "react";
import TitleCommentContainer from "../components/container/TitleCommentContainer";
import Button from "../components/button/Button";
import { BiSolidDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";



function VideoPage() {
  const location = useLocation();
  const { video } = location.state || {};

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await getAllVideos();
        setVideos(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideos();
  }, []);

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
      <div className="flex flex-col items-start justify-start w-full h-full mt-4 px-4">
        <div className="w-fit h-fit p-2">                                              
          <h1 className="text-3xl font-semibold">{video.title}</h1>
        </div>                                              
        <div className="flex items-start mt-4 2xl:w-3/4 sm:w-full justify-between">       
          <div className="flex gap-6">                                              
            <div className="">                                              
              <TitleCommentContainer userId={video.owner} />
            </div>                                              
            <div>                                              
              <Button                                              
                buttonText="Subscribe"                                              
                className="p-2 px-3 bg-red-700 rounded-xl"
              />                                              
            </div>                                              
          </div>                                              
          <div className="flex items-center justify-center gap-2 text-3xl p-1 px-2 rounded-xl bg-neutral-800">
          <BiSolidLike className="text-blue-700"/>
          <h1 className="text-xl font-semibold">45</h1>
          </div>
        </div>
        <div className="flex-col items-start justify-start gap-4 mt-4 p-4 bg-neutral-800 rounded-xl 2xl:w-3/4 sm:w-full">
          <div className="flex items-start justify-start gap-5">
            <h1>{`${video.views} views`}</h1>
            <h1>{`${video.createdAt}`}</h1>
          </div>
          <p>{video.description}</p>
        </div>
      </div>
      <div className="w-full h-full flex flex-wrap items-start justify-between p-8">
        <div className="flex flex-col">
          <AddComment videoId={video._id} userId={video.owner} />
          <Comment videoId={video._id} />
        </div>
        <div className="flex-wrap w-fit items-center justify-center gap-4 -mt-32">
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