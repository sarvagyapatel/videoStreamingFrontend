import Logo from "../logo/Logo";
import Button from "../button/Button";
import { LuDot } from "react-icons/lu";
import { Link } from "react-router-dom";
import { countChannelSubscriptions } from "../../service/subscription";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const User = ({userData, noOfVideos}) => {
  const [channelSubscribers, setChannelSubscribers] = useState(0);

  useEffect(() => {
    const countSubscribers = async () => {
      try {
        const response = await countChannelSubscriptions(userData._id);
        setChannelSubscribers(response);
      } catch (error) {
        console.log(error)
      }
    }
    countSubscribers();
  }, [userData]);
    
  return (
    <div className="w-full flex items-start justify-start ">
        <div className="w-fit scale-[0.64] -ml-[99px] sm:scale-100 sm:ml-[0px]">
          <div className="flex items-start justify-start">
            <div className="w-fit rounded-full">
              <Logo image={userData.avatar} className="w-48 rounded-full"/>
            </div>
            <div className="flex flex-col p-2">
              <div>
                <h1 className="text-5xl font-semibold">{userData.FullName}</h1>
              </div>
              <div className="flex p-2 text-neutral-400">
                <div className="w-fit flex">
                  <h1>{`@${userData.username}`}</h1>
                  <LuDot className="text-3xl" />
                </div>
                <div className="w-fit flex">
                  <h1>{`${channelSubscribers } subscribers`}</h1>
                  <LuDot className="text-3xl" />
                </div>
                <div className="w-fit">
                  <h1>{`${noOfVideos} videos`}</h1>
                </div>
              </div>
              <div className="flex gap-2 px-2">
                <div>
                  <Link>
                    <Button buttonText="Customize channel" className="bg-neutral-800 p-2 px-3 rounded-3xl hover:bg-neutral-700"/>
                  </Link>
                </div>
                <div>
                  <Link>
                    <Button buttonText="Manage Videos" className="bg-neutral-800 p-2 px-3 rounded-3xl hover:bg-neutral-700"/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
