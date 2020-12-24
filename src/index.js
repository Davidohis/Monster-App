import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider} from 'react-redux';
import  { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';

import { searchRobots, requestRobots } from './redux/reducer';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
