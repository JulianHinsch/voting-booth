import {connect} from 'react-redux';
import * as actions from '../actions/actioncreators.js';
import PollForm from '../components/PollForm.js';

const mapDispatchToProps = (dispatch) => {
	return {
		upsertPoll: (id, poll) => {
			dispatch(actions.upsertPoll(id, poll));
		},
	}
}

const PollFormContainer = connect(null, mapDispatchToProps)(PollForm);

export default PollFormContainer;