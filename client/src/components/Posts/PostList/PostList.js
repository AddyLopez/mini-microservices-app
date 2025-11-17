import React, { useEffect, useState } from "react";
import axios from "axios";

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

  console.log(posts);

  return (
    <section className="PostList">
      <h2>PostList</h2>
    </section>
  );
};

export default PostList;
