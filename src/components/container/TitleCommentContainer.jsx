import { useEffect, useState } from "react";
import { getUserByID } from "../../service/auth";
import Logo from "../logo/Logo";
import { formatDistanceToNow } from "date-fns";
import { LuDot } from "react-icons/lu";
import { countChannelSubscriptions } from "../../service/subscription";

// eslint-disable-next-line react/prop-types
function TitleCommentContainer({ video, videoId = null }) {
  const [user, setUser] = useState({});
  const [channelSubscribers, setChannelSubscribers] = useState(0);

  const getUser = async () => {
    try {
      const response = await getUserByID(video.owner);
      setUser(response);
    } catch (error) {
      console.log(error);
    }
  };

  const countSubscribers = async () => {
    try {
      const response = await countChannelSubscriptions(video.owner);
      setChannelSubscribers(response);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser();
    countSubscribers();
  }, []);

  return (
    <div className="-mt-3 flex w-fit flex-row items-start justify-start gap-2 rounded-xl p-2 text-white">
      <div className="min-w-10 h-full">
        <Logo image={user.avatar} className="w-10 h-fit rounded-full mr-1" />
      </div>
      <div className="flex flex-col items-start justify-start">
        {videoId ? (
          <h1 className="font-semibold">{user.username}</h1>
        ) : (
          <h1 className="font-semibold">{video.title}</h1>
        )}
        <div className="text-sm font-thin text-gray-400 flex flex-col">
          <div>
            {videoId ? (
              <h1 className="font-semibold">{`${channelSubscribers} subscribers`}</h1>
            ) : (
              <h1 className="font-semibold">{user.username}</h1>
            )}
          </div>
          {videoId ? (
            ""
          ) : (
            <div className="flex flex-row items-center justify-center -mt-2">
              <p>{`${video.views} views`}</p>
              <LuDot className="text-3xl" />
              <p>
                {formatDistanceToNow(new Date(video.createdAt), {
                  addSuffix: true,
                })}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TitleCommentContainer;
