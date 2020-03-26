import React from 'react'
import { Query } from 'react-apollo'

import formStyle from '../userData.module.css'

import { Link } from 'react-router-dom'

import gql from 'graphql-tag'

const CURRENT_USER = gql`
  query currentUser {
    currentUser {
      id
      username
      firstName
      lastName
    }
  }
`
function UserData () {
  return (
    <Query query={CURRENT_USER} fetchPolicy='network-only'>
      {({ loading, error, data }) => {
        if (loading) {
          return <div>Loading...</div>
        }
        if (error) {
          console.error(error)
          return <div>Error!</div>
        }

        const user = data.currentUser
        if (user == null) return <div>User or password doesn't match any account</div>

        return (
          <div className={formStyle.date}>
            <h1>{user.username}</h1>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <div className={formStyle}>
              <p className={formStyle.p}>
                <Link to='/auth/logout'>LogOut</Link>
              </p>
            </div>
          </div>
        )
      }}
    </Query>
  )
}

export default UserData
