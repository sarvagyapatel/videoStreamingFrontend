import { useEffect, useState } from "react";
import { currentUser as user } from "../service/auth";
import Logo from "../components/logo/Logo";
import { publishVideo } from "../service/videos";
import { useForm } from "react-hook-form";
import Input from "../components/input/Input";
import Button from "../components/button/Button";

function User() {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [newVideo, setNewVideo] = useState({});
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    try {
      user().then((response) => {
        setUserData(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const uploadVideo = async (data) => {
    try {
      setIsLoading(true);
      const response = await publishVideo(data);
      setNewVideo(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    console.log(data)
  };

  return (
    <div className="w-full h-full flex flex-wrap items-center justify-center">
      <div className="w-full h-full flex justify-center items-center">
        <div className="relative w-full h-64 flex  items-center">
          <div className="absolute w-11/12 h-full left-24 flex justify-center">
            <Logo
              image={userData.coverImage}
              className="w-11/12 h-64 rounded-3xl"
            />
          </div>
          <div className="relative top-1/4 left-48 w-96 h-64 ">
            <Logo
              image={userData.avatar}
              className="rounded-full shadow-2xl w-48 h-48"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <form onSubmit={handleSubmit(uploadVideo)} >
          <div className="w-full h-full flex flex-col items-center justify-center">
            <Input placeholder="Title" type="input" className="w-fit border-black border-2 p-1 rounded-lg" {...register("title", { required: true })}/>
            <Input placeholder="Description" type="input" className="w-fit border-black border-2 p-1 rounded-lg" {...register("description", { required: true })}/>
            <Input label="Video File:" type="file" name="video" {...register("videoFile", { required: true })} className=""/>
            <Input label="Thumbnail:" type="file" {...register("thumbnail", { required: true })} className=""/>
            <Button type="Submit" className="w-24 text-center border-2 text-white shadow-lg font-semibold p-1 border-blue-700 bg-blue-700 hover:bg-blue-800 rounded-lg"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default User;
