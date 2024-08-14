import { useEffect, useState } from "react";
import { getVideoComments } from "../../service/comment";
import CommentContainer from "./CommentContainer";

// eslint-disable-next-line react/prop-types
function Comment({ videoId }) {
  const [comments, setComments] = useState([]);
  const [visibleCount, setVisibleCount] = useState(1); // Number of comments to show initially
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await getVideoComments(videoId);
        setComments(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load comments.");
        setLoading(false);
      }
    };
    fetchComments();
  }, [videoId]);

  const showMoreComments = () => {
    setVisibleCount((prev) => prev + 7); // Show 3 more comments on each click
  };

  if (loading) {
    return <div>Loading comments...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full h-full flex flex-col items-start justify-start p-2 pt-4  gap-2 mb-64 max-[1530px]:bg-neutral-800 rounded-2xl border-8 border-neutral-900">
      {comments.length === 0 ? (
        <div>No comments yet.</div>
      ) : (
        comments.slice(0, visibleCount).map((comment) => (
          <CommentContainer 
            key={comment._id} 
            comment={comment}
          />
        ))
      )}
      {visibleCount < comments.length && (
        <button 
          onClick={showMoreComments} 
          className="mt-2 text-blue-500 hover:underline"
        >
          Show more comments
        </button>
      )}
    </div>
  );
}

export default Comment;
