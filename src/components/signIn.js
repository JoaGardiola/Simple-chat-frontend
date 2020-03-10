import React from 'react'
import formStyle from '../form.module.css'

import { Button, Form } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import { Formik } from 'formik'
import * as Yup from 'yup'

const ValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Usernames must have more than 5 characters')
    .max(255, 'Must be shorter than 255')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Passwords must have more than 8 characters')
    .max(255, 'Must be shorter than 255')
    .required('Required')
})

export default function signIn () {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={ValidationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        resetForm()
        setSubmitting(false)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting
      }) => (
        <Form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <Form.Group controlId='formUsername'>
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

          <Form.Group controlId='formPassword'>
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

          <Form.Group controlId='formCheckbox'>
            <Form.Check type='checkbox' className={formStyle.custumControlLabel} label='Remember me' />
          </Form.Group>

          <Button variant='primary' type='submit' className='btn btn-primary btn-block' disabled={isSubmitting}>
            Submit
          </Button>
          <p className={formStyle.forgotPassword}>
            or create an <Link to='/auth/signup'>account</Link>
          </p>
        </Form>
      )}
    </Formik>
  )
}
