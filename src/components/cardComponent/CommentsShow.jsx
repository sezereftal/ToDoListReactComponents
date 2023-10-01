import React from "react";

function CommentsShow({ commen }) {
  return (
    <div>
      <li>{commen.value}</li>
    </div>
  );
}

export default CommentsShow;
