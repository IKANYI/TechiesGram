import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Signup() {
  const validationSchema = Yup.object({
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
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    onSubmit: (formState) => {
      console.log(formState);
    },
    validationSchema: validationSchema,
  });
  return (
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
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Signup;
