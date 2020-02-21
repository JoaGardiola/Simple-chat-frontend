import React, { Component } from 'react'
import formStyle from '../form.module.css'

import { Button, Form } from 'react-bootstrap'

import { Link } from 'react-router-dom'

export default class Login extends Component {
  render () {
    return (
      <Form>
        <h3>Sign In</h3>

        <Form.Group controlId='formUsername'>
          <Form.Label>Username</Form.Label>
          <Form.Control type='text' className='form-control' placeholder='Enter username' required />
        </Form.Group>

        <Form.Group controlId='formPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' className='form-control' placeholder='Enter password' required />
        </Form.Group>

        <Form.Group controlId='formCheckbox'>
          <Form.Check type='checkbox' className={formStyle.custumControlLabel} label='Remember me' />
        </Form.Group>

        <Button variant='primary' type='submit' className='btn btn-primary btn-block'>
          Submit
        </Button>
        <p className={formStyle.forgotPassword}>
                  or create an <Link to='/auth/signup'>account</Link>
        </p>
      </Form>
    )
  }
}
