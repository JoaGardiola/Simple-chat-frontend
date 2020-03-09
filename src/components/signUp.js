import React, { useState } from 'react'
import formStyle from '../form.module.css'

import { Button, Form, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { Formik } from 'formik'
import * as Yup from 'yup'

import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Too Short!')
    .max(255, 'Must be shorter than 255')
    .required('Required'),
  lastName: Yup.string()
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

const SIGN_UP = gql`
  mutation signUp($input: UserInput!) {
    signUp(input: $input) {
      user{
        id
        username
      }
      jwt
    }
  }
`

export default function SignUp () {
  const [show, setShow] = useState(false)
  const signUpOk = ({ signUp }) => { console.log('successfully') }
  const signUpError = (error) => setShow(true)

  const [signUp] = useMutation(SIGN_UP, {
    onCompleted: signUpOk,
    onError: signUpError
  })

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', username: '', password: '' }}
      validationSchema={ValidationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        await signUp({ variables: { input: values } })
        resetForm()
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
          <h3>Sign Up</h3>
          <Alert show={show} variant='danger' onClose={() => setShow(false)} dismissible>
              Oh snap! Something went wrong
          </Alert>
          <Form.Group controlId='formFirstname'>
            <Form.Label>First name</Form.Label>
            <Form.Control
              name='firstName'
              type='text'
              className='form-control'
              placeholder='First name'
              onChange={handleChange}
              value={values.firstName}
              isInvalid={touched.firstName && errors.firstName}
              isValid={touched.firstName && !errors.firstName}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.firstName}
            </Form.Control.Feedback>
            <Form.Control.Feedback type='valid'>
                Looks good!
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='formLastname'>
            <Form.Label>Last name</Form.Label>
            <Form.Control
              name='lastName'
              type='text'
              className='form-control'
              placeholder='Last name'
              onChange={handleChange}
              value={values.lastName}
              isInvalid={touched.lastName && errors.lastName}
              isValid={touched.lastName && !errors.lastName}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.lastName}
            </Form.Control.Feedback>
            <Form.Control.Feedback type='valid'>
                Looks good!
            </Form.Control.Feedback>
          </Form.Group>

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
              isValid={touched.username && !errors.username}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.username}
            </Form.Control.Feedback>
            <Form.Control.Feedback type='valid'>
                Looks good!
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
              isValid={touched.password && !errors.password}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.password}
            </Form.Control.Feedback>
            <Form.Control.Feedback type='valid'>
                Looks good!
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
