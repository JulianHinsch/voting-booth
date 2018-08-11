import rootReducer from '../reducers/rootReducer.js';
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

export default () => {
    return createStore(rootReducer, applyMiddleware(thunk));
};