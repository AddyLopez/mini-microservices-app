import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]); // API sends back an array of comments associated with given post

  const fetchData = async () => {
    const response = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    const data = response.data;

    setComments(data);
  };

  useEffect(() => {
    fetchData();
  }, []); // Call this function only once, upon loading

  // Map over array of comments and return its contents
  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return;
  <>
    <ul>{renderedComments}</ul>;
  </>;
};

export default CommentList;
