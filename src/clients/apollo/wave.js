// External dependencies
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

import { REACT_APP_WAVE_URI } from './env'

const httpLink = createHttpLink({
  // uri: 'http://localhost:4000/graphql',
  uri: `${REACT_APP_WAVE_URI}/graphql`,
})

export const client = new ApolloClient({
  // uri: `${REACT_APP_WAVE_URI}/graphql`,
  link: httpLink,
  cache: new InMemoryCache(),
})
