import { useEffect, useState } from "react";
import { getAllVideos } from "../service/videos";
import { Link } from "react-router-dom";

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
          <div key={video._id} className="w-48 h-fit">
            <h1>{video.title}</h1>
            <Link
              to="/video"
              state={{ video }}
            >
              <img src={video.thumbnail} alt="thumbnail" />
            </Link>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
