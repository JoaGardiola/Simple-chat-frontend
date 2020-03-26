import React from 'react'

import { useApolloClient} from '@apollo/react-hooks'


export default function Logout () {

  const client = useApolloClient();
  
  return (
    localStorage.clear(),
    client.clearStore(), 
    <h3>Come back soon!</h3>
  )
}
