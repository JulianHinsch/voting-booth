import { connect } from 'react-redux'
import * as actions from '../actions/actioncreators.js';
import Poll from '../components/Poll.js'

const mapStateToProps = (state, ownProps) => ({
    headerOpen: state.ui.get('headerOpen'),
    loggedInUser: state.users.get('loggedInUser'),
    pollDataArray: state.polls,
});


const mapDispatchToProps = (dispatch, ownProps) => ({
    incrementOption: (pollId,optionId) => {
    	dispatch(actions.updateOption(pollId,optionId));
    }
});

const PollContainer = connect(mapStateToProps,mapDispatchToProps)(Poll);

export default PollContainer;

