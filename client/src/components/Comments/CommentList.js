import React from "react";

const CommentList = ({ comments }) => {
  // Map over array of comments and return its contents
  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
