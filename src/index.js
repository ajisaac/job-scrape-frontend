import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";

import * as serviceWorker from './serviceWorker';
import './index.css';
import Reducers from "./redux/reducers/Reducers";

import 'fontsource-roboto';

import App from "./App";


const store = createStore(
    Reducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
serviceWorker.unregister();

