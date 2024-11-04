import { useEffect, useState } from "react";
import { getAllVideos } from "../service/videos";
import { Link } from "react-router-dom";
import VideoDetails from "../components/videodetails/VideoDetails";
import axios from "axios";

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await getAllVideos();
        setVideos(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const check = async ()=>{
      try {
        let response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/v1/check`);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    check();

    fetchVideos();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-4 mt-10">
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
