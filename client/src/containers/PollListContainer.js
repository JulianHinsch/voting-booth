import { connect } from 'react-redux';
import PollList from '../components/PollList.js';

const mapStateToProps = (state) => {
    return ({
        polls: state.polls.get('items'),
        loading: state.polls.get('loading'),
        error: state.polls.get('error'),
    });
}

const PollListContainer = connect(mapStateToProps, null)(PollList);

export default PollListContainer;

