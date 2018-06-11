import { createStore,applyMiddleware } from 'redux';
import newsReducer from './app/reducers/newsReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default createStore(
    newsReducer,
    applyMiddleware(thunk,logger)
);