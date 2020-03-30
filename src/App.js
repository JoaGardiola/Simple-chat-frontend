import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './nav.css'
import authStyle from './auth.module.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import SignIn from './components/signIn'
import SignUp from './components/signUp'
import logout from './components/logout'
import UserData from './components/userData'

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

      <div className={authStyle.authWrapper}>
        <div className={authStyle.authInner}>
          <Switch>
            <Route exact path='/' component={SignIn} />
            <Route path='/auth/signin' component={SignIn} />
            <Route path='/auth/signup' component={SignUp} />
            <Route path='/auth/logout' component={logout} />
            <Route path='/auth/userData' component={UserData} />
          </Switch>
        </div>
      </div>
    </div></Router>
  )
}

export default App
