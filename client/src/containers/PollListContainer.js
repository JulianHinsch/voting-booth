import { connect } from 'react-redux';
import PollList from '../components/PollList.js';

const mapStateToProps = (state) => ({
    filter: state.users.get('loggedInUser'),
    pollDataArray: state.polls,
    headerOpen: state.ui.get('headerOpen'),
 });

const PollListContainer = connect(mapStateToProps, null)(PollList);

export default PollListContainer;

