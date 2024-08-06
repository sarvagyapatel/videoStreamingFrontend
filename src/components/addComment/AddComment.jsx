import { useEffect, useState } from "react";
import { getUserByID } from "../../service/auth";
import Input from "../input/Input";
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import { addComment } from "../../service/comment";

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
    <div className="mt-3 flex w-fit flex-row items-start justify-start gap-2 rounded-xl p-2 ">
      <div className="min-w-10 h-full">
        <img
          src={user.avatar}
          alt="image"
          className="w-10 h-8 rounded-full ml-2"
        />
      </div>
      <div className="flex flex-col items-start justify-start">
        <h1 className="font-semibold">{user.username}</h1>
        <form onSubmit={handleSubmit(postComment)}>
          <div className="w-full h-full flex flex-row items-center justify-cente">
            <Input type="text" placeholder="Add a comment ..." {...register("content", { required: true })} className="p-1 rounded-lg"/>
            <Button
              type="Submit" buttonText="Add"
              className="w-24 text-center border-2 text-white shadow-lg font-semibold p-1 border-blue-700 bg-blue-700 hover:bg-blue-800 rounded-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddComment;
