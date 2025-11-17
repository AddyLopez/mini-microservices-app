import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Make async post request to posts service on port 4000, send title in body of request
    await axios.post("http://localhost:4000/posts", {
      title,
    });

    setTitle(""); // Reset input box once successful
  };

  return (
    <section className="PostCreate">
      <form onSubmit={handleSubmit}>
        <section className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={handleChange}
            className="form-control"
          />
        </section>
        <button className="btn btn-primary">Submit</button>
      </form>
    </section>
  );
};

export default PostCreate;
