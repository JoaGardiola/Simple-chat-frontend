import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { ApolloClient } from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { ApolloProvider } from '@apollo/react-hooks'

const cache = new InMemoryCache()

const httpLink = new HttpLink({
  uri: 'http://localhost:3001/graphql'
})

const middlewareLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('jwt')
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : null
    }
  })
  return forward(operation)
})

const link = middlewareLink.concat(httpLink)

const init = async () => {
  await persistCache({
    cache,
    storage: window.localStorage
  })
}

init()

const client = new ApolloClient({
  cache,
  link
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
