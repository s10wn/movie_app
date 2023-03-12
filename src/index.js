import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';
import { client } from './apollo';
import { ApolloProvider } from '@apollo/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>

);