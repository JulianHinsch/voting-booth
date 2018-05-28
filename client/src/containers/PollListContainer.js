import { connect } from 'react-redux';
import PollList from '../components/PollList.js';

const mapStateToProps = (state) => {
    return ({
        filter: state.users.get('loggedInUser'),
        pollDataArray: state.polls,
    });
}

const PollListContainer = connect(mapStateToProps, null)(PollList);

export default PollListContainer;

