import * as types from '../actions/actiontypes';
import Immutable from 'immutable';

//userDataArray is an Immutable List, each entry is an Immutable Map
let defaultState = {
    loggedInUser: "",
    userDataArray: [
        {
          username: "jhinsch799",
          password: "12345",
        },
    ],
}

const users = (state = Immutable.fromJS(defaultState), action) => {
  switch (action.type) {
    case types.CREATE_USER:
      state = state.set('loggedInUser',action.username);
    	return state.setIn(['userDataArray',state.get('userDataArray').size], 
      Immutable.Map({
        username: action.username,
        password: action.password,
      }));
    case types.LOG_IN:
    	return state.set('loggedInUser',action.username);
    case types.LOG_OUT:
      alert("You have been logged out.");
      window.location.reload();
    	return state.set('loggedInUser','');	
    default:
      	return state;
  }
};

export default users;