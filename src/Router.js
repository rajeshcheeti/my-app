import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { client } from './clients/apollo/wave'
import { Home } from './screens/Home'

export const Router = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </ApolloProvider>
    </BrowserRouter>
  )
}
