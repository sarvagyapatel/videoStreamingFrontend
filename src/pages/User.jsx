import { useEffect, useState } from "react";
import { currentUser as user } from "../service/auth";
import { getChannelVideos } from "../service/videos";
import { Link } from "react-router-dom";
import VideoDetails from "../components/videodetails/VideoDetails";
import { User as UserContainer } from "../components/user/User";
import Logo from "../components/logo/Logo";

function User() {
  const [userData, setUserData] = useState({});
  const [channelVideos, setChannelVideos] = useState([]);

  const videos = async (userId) => {
    const response = await getChannelVideos(userId);
    setChannelVideos(response);
    console.log(response);
  };

  useEffect(() => {
    try {
      user().then((response) => {
        setUserData(response);
        videos(response._id);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-white p-4 gap-8">
      <div className="w-full flex items-center justify-center rounded-3xl">
        <Logo image={userData.coverImage} className="w-full rounded-3xl" />
      </div>
      <div className="flex w-full items-start justify-start">
        <UserContainer userData={userData} noOfVideos={channelVideos.length} />
      </div>
      <div className="flex flex-wrap w-full items-start justify-start gap-2">
        {channelVideos.map((video) => (
          <div key={video._id} className="w-fit h-fit">
            <Link to="/video" state={{ video }}>
              <VideoDetails video={video} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default User;
