import * as types from '../actions/actiontypes';
import Immutable from 'immutable';

const ui = (state = Immutable.Map({headerOpen: false,width: 0}), action) => {
  switch (action.type) {
    case types.UPDATE_WIDTH:
      return state.set('width',action.windowWidth)
    case types.CLOSE_SUBHEADER:
    	return state.set('headerOpen',false);
    case types.TOGGLE_SUBHEADER:
      return state.update('headerOpen', (val) => !val);
    default:
      return state;
  }
}

export default ui;
