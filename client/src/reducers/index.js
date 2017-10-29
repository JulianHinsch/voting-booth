import ui from './ui.js';
import users from './users.js';
import polls from './polls.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({ui,users,polls});
export default rootReducer;