import { useEffect, useState } from "react";
import { getAllVideos } from "../service/videos";
import { Link } from "react-router-dom";
import VideoDetails from "../components/videodetails/VideoDetails";

function Home() {
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

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-4">
        {videos.map((video) => (
          <div key={video._id} className="w-fit h-fit">
            <Link
              to="/video"
              state={{ video }}
            >
              <VideoDetails video={video}/>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
