import React from "react";

// Comments are associated with a particular post's ID
const CommentCreate = ({ postId }) => {
  return (
    <section>
      <form>
        <div className="form-group">
          <label>New Comment</label>
          <input className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </section>
  );
};

export default CommentCreate;
