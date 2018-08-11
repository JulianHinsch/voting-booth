import { connect } from 'react-redux';
import PollList from '../components/PollList.js';

const mapStateToProps = (state) => {
    return ({
        polls: state.polls,
    });
}

const PollListContainer = connect(mapStateToProps, null)(PollList);

export default PollListContainer;

