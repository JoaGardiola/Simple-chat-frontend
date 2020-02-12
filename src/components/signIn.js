import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import formStyle from '../form.module.css'

export default class Login extends Component {
  render () {
    return (
      <form>
        <h3>Sign In</h3>

        <div className='form-group'>
          <label>Username</label>
          <input type='username' className='form-control' placeholder='Enter username' />
        </div>

        <div className='form-group'>
          <label>Password</label>
          <input type='password' className='form-control' placeholder='Enter password' />
        </div>

        <div className='form-group'>
          <div className='custom-control custom-checkbox'>
            <input type='checkbox' className='custom-control-input' id='customCheck1' />
            <label className={formStyle.custumControlLabel} class='custom-control-label' htmlFor='customCheck1'>Remember me</label>
          </div>
        </div>

        <Button type='submit' className='btn btn-primary btn-block'>Submit</Button>
        <p className={formStyle.forgotPassword}>
                  or create an <a href='/auth/signup'>account</a>
        </p>
      </form>
    )
  }
}
