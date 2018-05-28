import * as types from './actiontypes';
import { API_ROOT } from '../apiconfig';
import axios from 'axios';

//old
export const closeSubheader = () => ({
	type: types.CLOSE_SUBHEADER,
});

export const toggleSubheader = () => ({
	type: types.TOGGLE_SUBHEADER,
});

export const updateWidth = (windowWidth) => ({
	type: types.UPDATE_WIDTH,
	windowWidth
});

export const logIn = (username) => ({
	type: types.LOG_IN,
	username
});

export const logOut = () => ({
	type: types.LOG_OUT,
});

//new

//polls
export const createPollSuccess = (poll) => (
	{type: types.CREATE_POLL_SUCCESS, poll}
);

export const loadPollsSuccess = (polls) => (
	{type: types.LOAD_POLLS_SUCCESS, polls}
);

//users
export const createUserSuccess = (user) => (
	{type: types.CREATE_POLL_SUCCESS, user}
);

export const loadUsersSuccess = (users) => (
	{type: types.LOAD_USERS_SUCCESS, users}
);

//options
export const createOptionSuccess = (option) => (
	{type: types.CREATE_OPTION_SUCCESS, option}
);

export const loadOptionsSuccess = (options) => (
	{type: types.LOAD_OPTIONS_SUCCESS, options}
);

export const  updateOptionSuccess = (id) => (
	{type: types.UPDATE_OPTION_SUCCESS, id}
);

//api calls

export const createPoll = (data) => {
	return dispatch => {
		return axios.post((API_ROOT+'/polls'), data)
  		.then(res => {
  			console.log('POST Request Response: ',res);
			dispatch(createPollSuccess(res.data));
  		})
  		.catch(err => console.log('POST Request Error: ',err));
	}
}

export const loadPolls = () => {
	return dispatch => {
		return axios.get((API_ROOT+'/polls'))
		.then(res => {
			console.log('GET Request Response: ',res);
			dispatch(loadPollsSuccess(res.data));
		})
		.catch(err => console.log('GET Request Error: ',err));
	}
}

export const createUser = (data) => {
	return dispatch => {
		return axios.post((API_ROOT+'/users'), data)
  		.then(res => {
  			console.log('POST Request Response: ',res);
			dispatch(createUserSuccess(res.data));
  		})
  		.catch(err => console.log('POST Request Error: ',err));
	}
}

export const loadUsers = () => {
	return dispatch => {
		return axios.get((API_ROOT+'/users'))
		.then(res => {
			console.log('GET Request Response: ',res);
			dispatch(loadUsersSuccess(res.data));
		})
		.catch(err => console.log('GET Request Error: ',err));
	}
}

export const createOption = (data) => {
	return dispatch => {
		return axios.post((API_ROOT+'/polloptions'), data)
  		.then(res => {
  			console.log('POST Request Response: ',res);
			dispatch(createOptionSuccess(res.data));
  		})
  		.catch(err => console.log('POST Request Error: ',err));
	}
}

export const loadOptions = (id,data) => {
	return dispatch => {
		return axios.get(API_ROOT+"/polloptions")
		.then(res => {
			console.log('GET Request Response: ',res);
			dispatch(loadOptionsSuccess(res.data));
		})
		.catch(err => console.log('GET Request Error: ',err));
	}
}

export const updateOption = (id,data) => {
	return (dispatch)=>{
		return axios.put((API_ROOT+"/polloptions/"+id), data)
  		.then(res => {
  			console.log('PUT Request Response: ',res);
  			dispatch(updateOptionSuccess(id));
  		})
  		.catch(err => console.log('PUT Request Error: ',err));
	}
}













