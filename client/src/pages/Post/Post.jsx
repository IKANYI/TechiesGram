import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import toast from "react-simple-toasts";
import "../../assets/globals.css";

function Post() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const cloudName = "dklr77uyo";
  const preset = "cloudinaryTutorial";

  const handleUploadImage = async () => {
    const payload = new FormData();
    payload.append("file", file);
    payload.append("upload_preset", preset);
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        payload,
      );
      return response.data.secure_url;
    } catch (err) {
      console.error(err);
      toast("Image upload failed. Please try again.", { theme: "failure" });
      return null;
    }
  };

  const handleSubmit = async (formValues) => {
    setLoading(true);

    if (!formValues.postText) {
      setLoading(false);
      return toast("Post text is required", { theme: "failure" });
    }

    try {
      const imageUrl = await handleUploadImage();
      if (!imageUrl) {
        setLoading(false);
        return;
      }

      const response = await fetch(`http://localhost:3000/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ ...formValues, postMedia: imageUrl }),
      });

      const data = await response.json();
      console.log(data);
      console.log(response);
      toast("Post submitted successfully!", { theme: "success" });
    } catch (e) {
      toast(e.message, { theme: "failure" });
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      postMedia: "",
      postText: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <div className="post-main">
      <div className="post-content">
        <form onSubmit={formik.handleSubmit} className="posts-form">
          <input
            type="file"
            name="postMedia"
            onChange={(event) => setFile(event.target.files[0])}
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
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Post;
