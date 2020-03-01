import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import 'i18n/i18n';
import App from 'app/App';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import configureStore from 'app/store/configureStore';

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={'Loading'}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
