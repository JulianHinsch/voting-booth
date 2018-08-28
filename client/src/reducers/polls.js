import * as types from '../actions/actiontypes';
import Immutable from 'immutable';
import uuid from 'uuid';

let defaultState = {
    loading: false,
    error: null,
    items: [
        {
            id: uuid.v4(),
            question: "Why did the chicken cross the road?",
            options: [
                {
                    id: uuid.v4(),
                    answer: "To get to the other side.",
                    votes: 504,
                },
                {
                    id: uuid.v4(),
                    answer: "Why not?",
                    votes: 320,
                },
            ],
        },
        {
            id: uuid.v4(),
            question: "Guess what?",
            options: [
                {
                    id: uuid.v4(),
                    answer: "Who?",
                    votes: 124,
                },
                {
                    id: uuid.v4(),
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
            let pollIndex = polls.findIndex(poll => {
                return poll.get('id') === action.option.get('poll_id');
            });
            let options = polls.getIn([pollIndex, 'options']);
            let optionIndex = options.findIndex(option => {
                return option.get('id') === action.option.get('id');
            });
            polls = polls.updateIn([pollIndex,'options',optionIndex], option => action.option);
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