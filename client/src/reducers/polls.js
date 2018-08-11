import * as types from '../actions/actiontypes';
import Immutable from 'immutable';

const generateId = () => {
    var uuidv1 = require('uuid/v1');
    return uuidv1();
}

let defaultState = {
    loading: false,
    error: null,
    items: [
        {
            id: generateId(),
            question: "Why did the chicken cross the road?",
            options: [
                {
                    id: generateId(),
                    answer: "To get to the other side.",
                    votes: 504,
                },
                {
                    id: generateId(),
                    answer: "Why not?",
                    votes: 320,
                },
            ],
        },
        {
            id: generateId(),
            question: "Guess what?",
            options: [
                {
                    id: generateId(),
                    answer: "Who?",
                    votes: 124,
                },
                {
                    id: generateId(),
                    answer: "What?",
                    votes: 0,
                },
            ],
        },
    ]   
};

const polls = (state = Immutable.fromJS(defaultState), action) => {
    let polls = state.get('items');
    switch (action.type) {
        case types.LOAD_POLLS_START:
            return state.set('loading',true);
        case types.LOAD_POLLS_SUCCESS:
            return state.merge({
                loading: false,
                items: action.polls,
            });
        case types.LOAD_POLLS_FAILURE:
            return state.merge({
                loading: false,
                error: action.err,
            });
        case types.CREATE_POLL_START:
            return state.set('loading',true);
        case types.CREATE_POLL_SUCCESS:
            //filter state in case poll already exists
            polls = polls.filter(poll => poll.get('id') !== action.poll.id);
            //push updated or new poll to state
            polls = polls.push(Immutable.fromJS(action.poll));
            return state.merge({
                items: polls,
                loading: false,
            });
        case types.CREATE_POLL_FAILURE:
            return state.merge({
                loading: false,
                error: action.err,
            });
        case types.DELETE_POLL_START:
            return state.set('loading',true);
        case types.DELETE_POLL_SUCCESS:
            polls = polls.filter(poll => poll.get('id') !== action.poll.id);
            return state.merge({
                items: polls,
                loading: false,
            });
        case types.DELETE_POLL_FAILURE:
            return state.merge({
                loading: false,
                error: action.err,
            });
        case types.UPDATE_OPTION_START:
            return state.set('loading',true);
        case types.UPDATE_OPTION_SUCCESS:
            //find poll that contains option to update
            pollThatContainsOption = polls.find(poll => {
                return poll.get('options').some(option => {
                    return option.get('id') === action.option.id;
                })
            });
            //push updated or new poll to state
            polls = polls.push(Immutable.fromJS(action.poll));
            return state.merge({
                items: polls,
                loading: false,
            });
        case types.UPDATE_OPTION_FAILURE:
            return state.merge({
                loading: false,
                error: action.err,
            });
        default:
            return state;
    }
}

export default polls;