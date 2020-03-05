import React, { Component } from 'react'
import formStyle from '../form.module.css'

import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { Formik } from 'formik'
import * as Yup from 'yup'

const ValidationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, 'Too Short!')
    .max(255, 'Must be shorter than 255')
    .required('Required'),
  lastname: Yup.string()
    .min(3, 'Too Short!')
    .max(255, 'Must be shorter than 255')
    .required('Required'),
  username: Yup.string()
    .min(5, 'Usernames must have more than 5 characters')
    .max(255, 'Must be shorter than 255')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Passwords must have more than 8 characters')
    .max(255, 'Must be shorter than 255')
    .required('Required')
})

export default class SignUp extends Component {
  render () {
    return (
      <Formik
        initialValues={{ firstname: '', lastname: '', username: '', password: '' }}
        validationSchema={ValidationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true)

          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            resetForm()
            setSubmitting(false)
          }, 500)
        }}
      >
        {({
          values,
          errors,
          isValid,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting
        }) => (
          <Form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <Form.Group controlId='formFirstname'>
              <Form.Label>First name</Form.Label>
              <Form.Control
                name='firstname'
                type='text'
                className='form-control'
                placeholder='First name'
                onChange={handleChange}
                value={values.firstname}
                isInvalid={touched.firstname && errors.firstname}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.firstname}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='formFirstname'>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                name='lastname'
                type='text'
                className='form-control'
                placeholder='Last name'
                onChange={handleChange}
                value={values.lastname}
                isInvalid={touched.lastname && errors.lastname}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.lastname}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='formFirstname'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                name='username'
                type='text'
                className='form-control'
                placeholder='Enter username'
                onChange={handleChange}
                value={values.username}
                isInvalid={touched.username && errors.username}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='formFirstname'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name='password'
                type='password'
                className='form-control'
                placeholder='Enter password'
                onChange={handleChange}
                value={values.password}
                isInvalid={touched.password && errors.password}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Button type='submit' className='btn btn-primary btn-block' disabled={isSubmitting}>
                Sign Up
            </Button>
            <p className={formStyle.forgotPassword}>
                  Already registered? <Link to='/auth/signin'>sign in</Link>
            </p>
          </Form>
        )}
      </Formik>
    )
  }
}
