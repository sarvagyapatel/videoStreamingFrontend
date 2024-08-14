import { useEffect, useState } from "react";
import { getUserByID } from "../../service/auth";
import Logo from "../logo/Logo";

// eslint-disable-next-line react/prop-types
function CommentContainer({ comment }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await getUserByID(comment.owner);
        setUser(response);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [comment]);

  return (
    <div className="-mt-3 flex w-fit flex-row items-start justify-start gap-2 rounded-xl p-2 text-white">
      <div className="min-w-10 h-full">
        <Logo image={user.avatar} className="w-10 h-fit rounded-full mr-1"/>
      </div>
      <div className="flex flex-col items-start justify-start 2xl:w-[1030px] max-[1130px]:max-w-[1230px]">
        <h1 className="font-semibold">{user.username}</h1>
        <p className="font-semibold ">{comment.content}</p>
      </div>
    </div>
  );

}
export default CommentContainer;
