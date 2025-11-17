import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentCreate from "../Comments/CommentCreate";

const PostList = () => {
  const [posts, setPosts] = useState({}); // Post service returns an object with a nested array

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:4000/posts");
    const data = response.data;

    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []); // Run this function only once, upon loading

  // console.log(posts);

  // Return array of values which are posts objects, map over the array and render the title
  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <>
        <div
          className="card"
          key={post.id}
          style={{ width: "30%", marginBottom: "20px" }}
        >
          <div className="card-body">
            <h3>{post.title}</h3>
            <CommentCreate postId={post.id} />
          </div>
        </div>
      </>
    );
  });

  return (
    <section className="PostList d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </section>
  );
};

export default PostList;
