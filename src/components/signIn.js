import React, { useState } from 'react'
import formStyle from '../form.module.css'

import { Button, Form, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

import { Formik } from 'formik'
import * as Yup from 'yup'

import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'


const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Usernames must have more than 5 characters')
    .max(255, 'Must be shorter than 255')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Passwords must have more than 8 characters')
    .max(255, 'Must be shorter than 255')
    .required('Required')
})

const SIGN_IN = gql`
  mutation signIn($input: signInInput!) {
    signIn(input: $input) {
      user{
        id
        username
      }
      jwt
    }
  }
`

export default function SignIn () {
  const [show, setShow] = useState(false)
  const history = useHistory()

  const signInOk = ({ signIn }) => {
    localStorage.setItem('jwt', signIn.jwt)
    console.log('success')
  }

  const signInError = (error) => setShow(true)

  const [signIn] = useMutation(SIGN_IN, {
    onCompleted: signInOk,
    onError: signInError
  })

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        await signIn({ variables: { input: values } })
        resetForm()
        setSubmitting(false)
        history.push('/auth/userData')
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
          <Alert show={show} variant='danger' onClose={() => setShow(false)} dismissible>
            Oh snap! Something went wrong
          </Alert>
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
