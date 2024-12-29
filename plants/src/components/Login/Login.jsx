import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Login() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h3 className="my-4 fw-bold hed_login">Login Form</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="email">Email:</label>
                <Field
                  type="email"
                  className="form-control mb-2 my-2 mt-3"
                  name="email"
                  id="email"
                />
                <ErrorMessage name="email" component="div" className="text-danger " />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <Field
                  type="password"
                  className="form-control mb-2 my-2 mt-3"
                  name="password"
                  id="password"
                />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>
              <button type="submit" className="btn btn-info mt-4" disabled={isSubmitting}>
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
