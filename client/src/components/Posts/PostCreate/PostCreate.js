import React from "react";

const PostCreate = () => {
  return (
    <section className="PostCreate">
      <form>
        <section className="form-group">
          <label>Title</label>
          <input className="form-control" />
        </section>
        <button className="btn btn-primary">Submit</button>
      </form>
    </section>
  );
};

export default PostCreate;
