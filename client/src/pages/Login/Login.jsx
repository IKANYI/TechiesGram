import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import toast from "react-simple-toasts";
import "../../assets/globals.css";
import * as Yup from "yup";

function Login() {
  const [submitting, setSubmitting] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (formValues) => {
    setSubmitting(true);
    if (!formValues.email || !formValues.password) {
      setSubmitting(false);
      return toast("provide both email and password to login", {
        theme: "failure",
      });
    }
    try {
      const response = await fetch(`http://localhost:3000/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      console.log(response);
      const data = await response.json();
      console.log(data);
      if (data.success == true) {
        if (data.data.role == "user") {
          navigate("/explore");
        } else {
          navigate("/admin");
        }
      } else {
        toast(data.message, { theme: "failure" });
      }
    } catch {
      toast(e.message, { theme: "failure" });
    } finally {
      setSubmitting(false);
    }
  };

  {
    /*const validationSchema = Yup.object({
    email: Yup.string("Email must be a string")
      .email("invalid email")
      .required("Please enter  email"),
    password: Yup.string("Password must be a string").required(
      "Please enter password",
    ),
  });*/
  }
  const formik = new useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
    //validationSchema: validationSchema,
  });
  return (
    <div className="login-main">
      <div className="login">
        <h2 className="login-title">login</h2>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <input
              className="login input"
              type="text"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p>{formik.errors.email}</p>
            )}
            <input
              className="login input"
              type="text"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p>{formik.errors.password}</p>
            )}
            <button type="submit" className="sign-button">
              submit
            </button>
          </form>
          <p>
            Don't have account? <a href="/signup">Signup</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
