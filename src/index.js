import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloProvider,ApolloClient,InMemoryCache } from '@apollo/client';
import App from './App';


const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache()
})


ReactDOM.render(
  <ApolloProvider client={client}>
     <App/>
  </ApolloProvider>,
  document.getElementById('root')
);
