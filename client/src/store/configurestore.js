import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer.js';
import thunk from 'redux-thunk';

export default () => {
    return createStore(rootReducer, applyMiddleware(thunk));
};