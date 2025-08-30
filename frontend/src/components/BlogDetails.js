import React from "react";

const BlogDetails = ({ blog }) => {
  return (
    <div>
      <h2>{blog.title}</h2>
      {Array.isArray(blog.fullDesc) ? (
        blog.fullDesc.map((step, index) => (
          <p key={index}>
            <strong>{index + 1}.</strong> {step}
          </p>
        ))
      ) : (
        <p>{blog.fullDesc}</p>
      )}
    </div>
  );
};

export default BlogDetails;
