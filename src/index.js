import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from '../src/components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers';
import middlewares from './middlewares';

const store = createStore(reducers, middlewares)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
