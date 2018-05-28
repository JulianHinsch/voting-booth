import * as types from '../actions/actiontypes';
import Immutable from 'immutable';

const generateId = () => {
    var uuidv1 = require('uuid/v1');
    return uuidv1();
}

let defaultState = [
    {
      idx: generateId(),
      question: "Why did the chicken cross the road?",
      username: "jhinsch799",
      timeCreated: new Date(),
      options: [
        {
          idx: generateId(),
          answer: "To get to the other side.",
          popularity: 504,
        },
        {
          idx: generateId(),
          answer: "Why not?",
          popularity: 320,
        },
      ],
    },
    {
      idx: generateId(),
      question: "Guess what?",
      username: "jeff",
      timeCreated: new Date(),
      options: [
        {
          idx: generateId(),
          answer: "Who?",
          popularity: 124,
        },
        {
          idx: generateId(),
          answer: "What?",
          popularity: 0,
        },
      ],
    },
  ];

const polls = (state = Immutable.List(defaultState), action) => {
  switch (action.type) {
    case types.CREATE_POLL_SUCCESS:
        let optionObjectArray = action.options.map((element)=>({
          idx: generateId(),
          answer: element,
          popularity: 0,
        }));
    	  return state.push({
          idx: action.idx,
          question: action.question,
          username: action.username,
          timeCreated: action.timeCreated,
          options: optionObjectArray,
        });
    case types.UPDATE_OPTION_SUCCESS:
        let pollIndex = state.findIndex((i)=>(i.idx===action.pollId));
        let poll = state.get(pollIndex);
        let optionIndex = poll.options.findIndex((el)=>el.idx===action.optionId);
        poll.options[optionIndex].popularity++;
        return state.set(pollIndex,poll);
    default:
      return state;
  }
}

export default polls;