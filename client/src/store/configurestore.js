import rootReducer from '../reducers/index.js';
import {createStore} from 'redux';

/*export default (initialState) => {
  return createStore(rootReducer, initialState);
};*/


export default () => {
  return createStore(rootReducer);
};