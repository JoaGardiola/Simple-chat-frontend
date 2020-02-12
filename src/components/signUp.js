import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import formStyle from '../form.module.css'


export default class SignUp extends Component {
  render () {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className='form-group'>
          <label>First name</label>
          <input type='text' className='form-control' placeholder='First name' />
        </div>

        <div className='form-group'>
          <label>Last name</label>
          <input type='text' className='form-control' placeholder='Last name' />
        </div>

        <div className='form-group'>
          <label>Username</label>
          <input type='username' className='form-control' placeholder='Enter username' />
        </div>

        <div className='form-group'>
          <label>Password</label>
          <input type='password' className='form-control' placeholder='Enter password' />
        </div>

        <Button type='submit' className='btn btn-primary btn-block'>Sign Up</Button>
        <p className={formStyle.forgotPassword}>
            Already registered? <a href='/auth/signin'>sign in</a>
        </p>
      </form>
    )
  }
}
