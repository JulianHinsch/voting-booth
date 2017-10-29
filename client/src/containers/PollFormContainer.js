import {connect} from 'react-redux';
import * as actions from '../actions/actioncreators.js';
import PollForm from '../components/PollForm.js';

const mapStateToProps = (state) => {
	return {
    	loggedInUser: state.users.get('loggedInUser'),
    	headerOpen: state.ui.get('headerOpen'),
  	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleSubmit: (username,question,options) => {
			dispatch( actions.createPoll(username,question,options));
		},
	}
}


const PollFormContainer = connect(mapStateToProps, mapDispatchToProps)(PollForm);

export default PollFormContainer;