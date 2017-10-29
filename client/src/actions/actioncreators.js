import * as types from './actiontypes';

const generateId = () => {
    var uuidv1 = require('uuid/v1');
    return uuidv1();
}

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

export const createUser = (username,password) => ({
	type: types.CREATE_USER,
	username,
	password
});

export const incrementOption = (pollId,optionId) => ({
	type: types.INCREMENT_OPTION,
	pollId,
	optionId
});

export const createPoll = (username,question,options) => {(
	type: types.CREATE_POLL,
	timeCreated: new Date(),
	idx: generateId(),
	username,
	question,
	options
});
