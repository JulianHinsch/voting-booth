import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import * as actions from '../actions/actioncreators.js';
import Poll from '../components/Poll.js';

const mapStateToProps = (state, ownProps) => {
    return ({
        poll: state.polls.get('items').find(poll => poll.get('id') === ownProps.match.params.id),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        updateOption: (id, option) => {
            console.log(id,option);
            dispatch(actions.updateOption(id, option));
        }
    })   
}

const PollContainer = connect(mapStateToProps,mapDispatchToProps)(Poll);

PollContainer.propTypes = {
    match: PropTypes.object.isRequired,
}

export default PollContainer;

