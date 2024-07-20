import { useFormik } from "formik";
import React from "react";
import "../../assets/globals.css";

function Post() {
  const formik = useFormik({
    initialValues: {
      postMedia: "",
      postText: "",
    },
    onSubmit: (formState) => {
      console.log({
        ...formState,
        postMedia: formState.postMedia.name,
      });
    },
  });
  return (
    <div className="post-main">
      <div className="post-content">
        <form onSubmit={formik.handleSubmit} className="posts-form">
          <input
            type="file"
            name="postMedia"
            onChange={(event) =>
              formik.setFieldValue("postMedia", event.currentTarget.files[0])
            }
            onBlur={formik.handleBlur}
          />
          <input
            type="text"
            name="postText"
            placeholder="Type your post here"
            className="post-text"
            value={formik.values.postText}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <button type="submit" className="post-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Post;
