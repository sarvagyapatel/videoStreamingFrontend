import { useEffect, useState } from "react";
import { currentUser } from "../../service/auth";
import Input from "../input/Input";
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import { addComment } from "../../service/comment";
import Logo from "../logo/Logo";

// eslint-disable-next-line react/prop-types
function AddComment({ videoId, userId }) {
  const [user, setUser] = useState({});
  const { register, handleSubmit } = useForm();

  console.log(userId)
  const postComment = async (data) => {
    try {
      console.log(data);
      await addComment(videoId, data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await currentUser();
        setUser(response);
        console.log(response.avatar)
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [userId]);

  return (
    <div className="mt-3 flex w-full flex-row items-start justify-start gap-2 rounded-xl p-2 ">
      <div className="min-w-10 h-full">
      <Logo image={user.avatar} className="w-10 rounded-full mr-2"/>
      </div>
      <div className="flex flex-col items-start justify-start">
        <h1 className="font-semibold text-white">{user.username}</h1>
        <form onSubmit={handleSubmit(postComment)}>
          <div className="w-full h-full flex  items-start justify-start ">
            <textarea name="postContent" placeholder="Add a comment ..." rows={1} cols={100} {...register("content", { required: true })} className="overflow-auto w-full p-1 rounded-lg bg-neutral-900 text-white"/>
            <Button
              type="Submit" buttonText="Comment"
              className="w-24 text-center border-2 text-white shadow-lg font-semibold p-1 border-neutral-700 bg-neutral-700 hover:bg-neutral-800 rounded-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddComment;
