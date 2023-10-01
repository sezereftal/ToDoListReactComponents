import React from "react";
import CommentsShow from "./CommentsShow";

function CommentsList({ comment }) {
  return (
    <div>
      {comment.map((commen, index) => {
        return <CommentsShow key={index} commen={commen} />;
      })}
    </div>
  );
}

export default CommentsList;
