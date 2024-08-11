import { useEffect, useState } from "react";
import { getUserByID } from "../../service/auth";
import Logo from "../logo/Logo";

// eslint-disable-next-line react/prop-types
function TitleCommentContainer({ userId, content, title }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await getUserByID(userId);
        setUser(response);
        console.log(response.avatar)
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [userId]);

  return (
    <div className="-mt-3 flex w-fit flex-row items-start justify-start gap-2 rounded-xl p-2 text-white">
      <div className="min-w-10 h-full">
        <Logo image={user.avatar} className="w-10 h-fit rounded-full mr-1"/>
      </div>
      <div className="flex flex-col items-start justify-start">
        {title?(""):(<h1 className="font-semibold">{user.username}</h1>)}
        <h1 className="2xl:w-3/4">{content || title}</h1>
      </div>
    </div>
  );
}

export default TitleCommentContainer;
