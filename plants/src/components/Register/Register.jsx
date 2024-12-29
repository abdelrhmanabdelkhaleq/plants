import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function Register() {
  const navigate = useNavigate();

  const initialValues = {
    first_name: '',
    last_name: '',
    age: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required.'),
    last_name: Yup.string().required('Last name is required.'),
    age: Yup.number()
      .required('Age is required.')
      .positive('Please enter a valid age.')
      .integer('Please enter a valid age.'),
    email: Yup.string().email('Email is invalid.').required('Email is required.'),
    password: Yup.string()
      .required('Password is required.')
      .min(6, 'Password must be at least 6 characters.'),
  });

  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    axios.post('https://your-api-endpoint.com/register', values)
      .then(response => {
        console.log(response.data);
        setSubmitting(false);
        navigate('/login');
      })
      .catch(error => {
        console.error(error);
        setErrors({ apiError: 'Registration failed. Please try again.' });
        setSubmitting(false);
      });
  };

  return (
    <div className="w-75 mx-auto py-3">
      <h3 className="my-4 fw-bold hed_login">Registration Form</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <div>
              <label htmlFor="first_name">First Name:</label>
              <Field
                type="text"
                className="form-control mb-2 my-input my-2"
                name="first_name"
                id="first_name"
              />
              <ErrorMessage name="first_name" component="div" className="text-danger" />
            </div>

            <div>
              <label htmlFor="last_name">Last Name:</label>
              <Field
                type="text"
                className="form-control mb-2 my-input my-2"
                name="last_name"
                id="last_name"
              />
              <ErrorMessage name="last_name" component="div" className="text-danger" />
            </div>

            <div>
              <label htmlFor="age">Age:</label>
              <Field
                type="number"
                className="form-control mb-2 my-input my-2"
                name="age"
                id="age"
              />
              <ErrorMessage name="age" component="div" className="text-danger" />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                className="form-control mb-2 my-input my-2"
                name="email"
                id="email"
              />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                className="form-control mb-2 my-input my-2"
                name="password"
                id="password"
              />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </div>

            {errors.apiError && <div className="text-danger">{errors.apiError}</div>}

            <button type="submit" className="btn btn-info" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
