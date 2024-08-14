import { useState } from "react";
import { publishVideo } from "../../service/videos";
import { useForm } from "react-hook-form";
import Button from "../button/Button";
import DropZone from "../dropzone/DropZone";
import Logo from "../logo/Logo";
import VideoContainer from "../videoContainer/VideoContainer";
import { LuLoader2 } from "react-icons/lu";

function UploadVideo() {
  const [isLoading, setIsLoading] = useState(false);
  const [newVideo, setNewVideo] = useState();
  const { register, handleSubmit } = useForm();
  const uploadVideo = async (data) => {
    try {
      setIsLoading(true);
      const response = await publishVideo(data);
      console.log(response.data);
      setNewVideo(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    console.log(data);
  };
  return (
    <div className="w-full h-full flex items-center justify-center mt-10">
      <div className="bg-neutral-800 w-fit h-fit p-8 rounded-3xl">
        <form
          onSubmit={handleSubmit(uploadVideo)}
          className="flex flex-col items-center justify-center gap-6"
        >
          <div className="w-full h-full flex flex-wrap items-start justify-center gap-6">
            <div className="w-fit h-fit flex flex-col items-start justify- gap-3">
              <textarea
                rows={2}
                cols={40}
                placeholder="Title(required)"
                type="input"
                className="w-fit border-black border-2 p-1 rounded-lg"
                {...register("title", { required: true })}
              />
              <textarea
                rows={2}
                cols={40}
                placeholder="Description"
                type="input"
                className="w-fit border-black border-2 p-1 rounded-lg"
                {...register("description", { required: true })}
              />
            </div>
            <div className="w-fit h-fit flex flex-col items-center justify-center gap-3">
              {newVideo ? (
                <VideoContainer video={newVideo} className="w-60 h-36"/>
              ) : (
                <DropZone
                  {...register("videoFile", { required: true })}
                  className="w-60 h-36" fileType="'Video'"
                />
              )}
              {newVideo ? (
                <Logo image={newVideo.thumbnail} className="w-60 h-36"/>
              ) : (
                <DropZone
                  {...register("thumbnail", { required: true })}
                  className="w-60 h-36" fileType="'Thumbnail'"
                />
              )}
            </div>
          </div>
          <Button
            type="Submit"
            className="w-fit text-2xl text-center border-2 text-white shadow-lg font-semibold p-2 px-6 border-blue-700 bg-blue-700 hover:bg-blue-800 rounded-lg"
            disabled={newVideo?true:false}
            buttonText={newVideo?("Uploaded"):(isLoading?(<LuLoader2 className="animate-spin text-3xl"/>):("Upload"))}
          />
        </form>
      </div>
    </div>
  );
}

export default UploadVideo;
