import { useEffect, useState } from "react";

function VideoContainer({ video }) {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    if (video) {
      setVideoUrl(video.videoFile);
      console.log(video);
    }
  }, [video]);
  return (
    <div className="w-full h-full flex flex-wrap items-center justify-center text-white">
      <div className="w-full h-full flex flex-wrap items-center justify-center mt-3">
        <iframe
          src={videoUrl}
          width="640"
          height="360"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          style={{ height: "auto", width: "100%", aspectRatio: "640 / 360" }}
          allowFullScreen
          className="bg-white"
        ></iframe>
      </div>
      
    </div>
  );
}

export default VideoContainer;
