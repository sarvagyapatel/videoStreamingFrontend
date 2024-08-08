import { useEffect, useState } from "react";
import { getUserByID } from "../../service/auth";
import Logo from "../logo/Logo";

// eslint-disable-next-line react/prop-types
function CommentContainer({ userId, content }) {
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
    <div className="mt-3 flex w-fit flex-row items-start justify-start gap-2 rounded-xl p-2 text-white">
      <div className="min-w-10 h-full">
        <Logo image={user.avatar} className="w-10 h-fit rounded-full ml-2 mr-4"/>
      </div>
      <div className="flex flex-col items-start justify-start">
        <h1 className="font-semibold">{user.username}</h1>
        <p className="font-semibold ">{content}</p>
      </div>
    </div>
  );
}

export default CommentContainer;
