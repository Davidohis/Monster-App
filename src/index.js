import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider} from 'react-redux';
import  { createStore, applyMiddleware } from 'redux';
import { searchRobots } from './redux/reducer';
import { createLogger} from 'redux-logger';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);
