import React, { Component } from 'react'
import formStyle from '../form.module.css'

import { Button, Form } from 'react-bootstrap'

import { Link } from 'react-router-dom'

export default class SignUp extends Component {
  render () {
    return (
      <Form>
        <h3>Sign Up</h3>

        <Form.Group controlId='formFirstname'>
          <Form.Label>First name</Form.Label>
          <Form.Control type='text' className='form-control' placeholder='First name' required />
        </Form.Group>

        <Form.Group controlId='formLastname'>
          <Form.Label>Last name</Form.Label>
          <Form.Control type='text' className='form-control' placeholder='Last name' required />
        </Form.Group>

        <Form.Group controlId='formUsername'>
          <Form.Label>Username</Form.Label>
          <Form.Control type='text' className='form-control' placeholder='Enter username' required />
        </Form.Group>

        <Form.Group controlId='formPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' className='form-control' placeholder='Enter password' required />
        </Form.Group>

        <Button type='submit' className='btn btn-primary btn-block'>
          Sign Up
        </Button>
        <p className={formStyle.forgotPassword}>
            Already registered? <Link to='/auth/signin'>sign in</Link>
        </p>
      </Form>
    )
  }
}
