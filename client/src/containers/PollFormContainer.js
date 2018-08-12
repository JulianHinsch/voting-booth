import {connect} from 'react-redux';
import * as actions from '../actions/actioncreators.js';
import PollForm from '../components/PollForm.js';

const mapDispatchToProps = (dispatch) => {
	return {
		createPoll: (poll) => {
			dispatch(actions.createPoll(poll));
		},
	}
}

const PollFormContainer = connect(null, mapDispatchToProps)(PollForm);

export default PollFormContainer;