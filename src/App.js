import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import SignIn from './components/signIn'
import SignUp from './components/signUp'

function App () {
  return (<Router>
    <div className='App'>
      <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
        <div className='container'>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/auth/signin'>Sign In</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/auth/signup'>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='auth-wrapper'>
        <div className='auth-inner'>
          <Switch>
            <Route exact path='/' component={SignIn} />
            <Route path='/auth/signin' component={SignIn} />
            <Route path='/auth/signup' component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  )
}

export default App
