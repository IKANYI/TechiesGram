import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../assets/globals.css";
import { useNavigate } from "react-router-dom";
import toast from "react-simple-toasts";
import { apiBase } from "../../utils/config.js";

function Signup() {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (formValues) => {
    setSubmitting(true);
    if (formValues.password !== formValues.confPassword) {
      toast("password are not matching", {
        theme: "failure",
        duration: 3000,
      });
      setSubmitting(false);
      return;
    }
    try {
      const response = await fetch(`http://localhost:3000/user`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      console.log(response);
      const data = await response.json();
      if (response.ok == true) {
        toast(data.message, { theme: "success" });
        navigate("/login");
      } else {
        toast(data.message, { theme: "failure" });
      }
    } catch (e) {
      console.log(e.message);
      toast(e.message, { theme: "failure" });
    } finally {
      setSubmitting(false);
    }
  };
  {
    /*const validationSchema = Yup.object({
    firstName: Yup.string("firstName must be a string")
      .min(3, "First name should be more than 3 characters")
      .max(10, "First name should not be more than 10 characters")
      .required("First name is required"),
    lastName: Yup.string("Last name must be a string")
      .min(3, "Last name should be more than 3 characters")
      .max(10, "Last name should not be more than 10 characters")
      .required("Last name is required"),
    email: Yup.string("Email must be a string")
      .email("invalid email")
      .required("Email required"),
    phoneNumber: Yup.string("Phone number must be number").required(
      "enter phone number",
    ),
    password: Yup.string("Password must be a string").required(
      "Please enter password",
    ),
  });*/
  }
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confPassword: "",
    },
    onSubmit: handleSubmit,
    //validationSchema: validationSchema,
  });
  return (
    <div className="main-sign">
      <div className="signup">
        <h2 className="signup-title">signup</h2>
        <form onSubmit={formik.handleSubmit} className="signup-form">
          <input
            type="text"
            className="signup-input"
            placeholder="First Name"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <p>{formik.errors.firstName}</p>
          )}
          <input
            type="text"
            className="signup-input"
            placeholder="Last Name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <p>{formik.errors.lastName}</p>
          )}
          <input
            type="text"
            className="signup-input"
            placeholder="Email Address"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <p>{formik.errors.email}</p>
          )}
          <input
            type="text"
            className="signup-input"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <p>{formik.errors.phoneNumber}</p>
          )}
          <input
            type="text"
            className="signup-input"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <p>{formik.errors.password}</p>
          )}
          <input
            type="text"
            className="signup-input"
            placeholder="Confirm Password"
            name="confPassword"
            onChange={formik.handleChange}
            value={formik.values.confPassword}
          />
          <button type="submit" className="signup-button">
            submit
          </button>
        </form>
        <p>
          Already have an account? <a href="/login">login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
