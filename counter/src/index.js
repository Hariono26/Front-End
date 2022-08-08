import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from "react-redux"
import { createStore } from "redux"
import allReducers from './redux/reducers'

const globalState = createStore(allReducers)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={globalState}>
      <App />
    </Provider>
);


