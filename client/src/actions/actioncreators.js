import * as types from './actiontypes';
import { API_ROOT } from '../config/apiconfig';
import axios from 'axios';

export const loadPollsStart = () => ({
    type: types.LOAD_POLLS_START,
});
export const loadPollsSuccess = (polls) => ({
    type: types.LOAD_POLLS_SUCCESS, 
    polls
});
export const loadPollsFailure = (err) => ({
    type: types.LOAD_POLLS_FAILURE,
    err
});

export const loadPolls = () => {
	return dispatch => {
        dispatch(loadPollsStart());
		return axios.get(`${API_ROOT}/polls`)
		.then(res => {
			dispatch(loadPollsSuccess(res.data));
		})
		.catch(err => {
            dispatch(loadPollsFailure(err));
        })
	}
}

export const createPollStart = () => ({
    type: types.CREATE_POLL_START,
});
export const createPollSuccess = (poll) => ({
    type: types.CREATE_POLL_SUCCESS, 
    poll
});
export const createPollFailure = (err) => ({
    type: types.CREATE_POLL_FAILURE,
    err
});

export const createPoll = (poll) => {
	return dispatch => {
        dispatch(createPollStart());
		return axios.post(`${API_ROOT}/polls`, poll)
  		.then(res => {
			dispatch(createPollSuccess(poll));
  		})
  		.catch(err => {
            dispatch(createPollFailure(err))
        })
	}
}

export const deletePollStart = () => ({
    type: types.DELETE_POLL_START,
});
export const deletePollSuccess = (poll) => ({
    type: types.DELETE_POLL_SUCCESS, 
    poll
});
export const deletePollFailure = (err) => ({
    type: types.DELETE_POLL_FAILURE,
    err
});

export const deletePoll = (id) => {
    return dispatch => {
        dispatch(deletePollStart());
        return axios.delete(`${API_ROOT}/polls/${id}`)
        .then(res => {
            dispatch(deletePollSuccess(id));
        })
        .catch(err => {
            dispatch(deletePollFailure(err));
        })
    }
}

export const updateOptionStart = () => ({
    type: types.UPDATE_OPTION_START,
});
export const updateOptionSuccess = (option) => ({
    type: types.UPDATE_OPTION_SUCCESS,
    option
});
export const updateOptionFailure = (err) => ({
    type: types.UPDATE_OPTION_FAILURE,
    err
});

export const updateOption = (id, option) => {
	return (dispatch) => {
        dispatch(updateOptionStart());
		return axios.patch((`${API_ROOT}/options/${id}`), {
            id: option.get('id'),
            answer: option.get('answer'),
            votes: option.get('votes'),
            pollId: option.get('poll_id'),
        })
  		.then(res => {
  			dispatch(updateOptionSuccess(option));
  		})
  		.catch(err => {
            dispatch(updateOptionFailure(err));       
        })
	}
}





















