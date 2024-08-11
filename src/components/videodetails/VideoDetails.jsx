import TitleCommentContainer from "../container/TitleCommentContainer";
import Logo from "../logo/Logo";

function VideoDetails({ video }) {
  return (
    <div className="flex flex-col gap-2 text-white ">
      <div className="w-fit h-fit m-2">
        <Logo image={video.thumbnail} className="rounded-xl w-72 h-40 shadow-2xl shad shadow-slate-900"/>
      </div>
      <div>
        <TitleCommentContainer userId={video.owner} title={video.title} />
      </div>
    </div>
  );
}

export default VideoDetails;
