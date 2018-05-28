import users from './users.js';
import polls from './polls.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({users,polls});
export default rootReducer;