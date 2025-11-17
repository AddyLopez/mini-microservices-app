import React from "react";
import PostCreate from "../Posts/PostCreate";
import PostList from "../Posts/PostList";

function App() {
  return (
    <div className="App container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h2>Posts</h2>
      <PostList />
    </div>
  );
}

export default App;
