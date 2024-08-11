import { useEffect, useState } from "react";
import { getVideoComments } from "../../service/comment";
import TitleCommentContainer from "../container/TitleCommentContainer";

// eslint-disable-next-line react/prop-types
function Comment({ videoId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const allComments = async () => {
      try {
        const response = await getVideoComments(videoId);
        setComments(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    allComments();
  }, [videoId]);

  return (
      <div className="w-full h-full flex flex-col items-start justify-start p-2 gap-2 mb-32">
        {comments.map((comment) => (
          <TitleCommentContainer key={comment._id} userId={comment.owner} content={comment.content}/>
        ))}
      </div>
  );
}

export default Comment;
