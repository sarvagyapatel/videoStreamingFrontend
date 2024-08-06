import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Comment from "../components/comment/Comment";
import AddComment from "../components/addComment/AddComment";

function VideoPage() {
  const location = useLocation();
  const { video } = location.state || {};
  const [videoUrl, setVideoUrl] = useState("");



  useEffect(() => {
    if (video) {
      setVideoUrl(video.videoFile);
    }
  }, [video]);

  if (!video) {
    return <div>No video data available</div>;
  }

  console.log(video)
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-wrap items-center justify-center">
        <div className="w-full h-full flex flex-wrap items-center justify-center mt-3">
          <iframe
            src={videoUrl}
            width="640"
            height="230"
            
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            style={{ height: "auto", width: "100%", aspectRatio: "640 / 230"}}
            allowFullScreen
            className="bg-white"
          ></iframe>
        </div>
      </div>
      <div className=" w-full h-full flex flex-col items-start justify-start p-8"> 
        <AddComment videoId={video._id} userId={video.owner}/>
        <Comment videoId={video._id} />
      </div>
    </div>
  );
}

export default VideoPage;
