import React, { useState } from "react";
import axios from "axios";

// Comments are associated with a particular post's ID
const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create new comment and associate it with the given post. Include content in post request body.
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent(""); // Reset input box
  };

  // Comment displayed in PostList component

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            className="form-control"
            value={content}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </section>
  );
};

export default CommentCreate;
