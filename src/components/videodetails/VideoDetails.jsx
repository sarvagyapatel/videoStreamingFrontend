import TitleCommentContainer from "../container/TitleCommentContainer";
import Logo from "../logo/Logo";

function VideoDetails({ video }) {
  return (
    <div className="flex flex-col gap-2 text-white max-[600px]:mt-4 ">
      <div className="w-fit h-fit 2xl:m-2">
        <Logo image={video.thumbnail} className="2xl:rounded-xl 2xl:w-72 fill 2xl:h-40 max-[600px]:w-full  shadow-2xl shad shadow-slate-900"/>
      </div>
      <div className="max-[600px]:m-2">
        <TitleCommentContainer video={video}/>
      </div>
    </div>
  );
}

export default VideoDetails;
