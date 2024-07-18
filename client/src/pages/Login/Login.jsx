import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login() {
  const validationSchema = Yup.object({
    email: Yup.string("Email must be a string")
      .email("invalid email")
      .required("Please enter  email"),
    password: Yup.string("Password must be a string").required(
      "Please enter password",
    ),
  });
  const formik = new useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (formState) => {
      console.log(formState);
    },
    validationSchema: validationSchema,
  });
  return (
    <div className="login">
      <h2 className="login-title">login</h2>
      <div className="login-input">
        <form onSubmit={formik.handleSubmit}>
          <input
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
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
