import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import * as actions from '../actions/actioncreators.js';
import Poll from '../components/Poll.js'

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps.match.params.id);
    return ({
        poll: state.polls.find(poll => poll.get('id') === ownProps.match.params.id),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        upsertOption: (id, option) => {
            dispatch(actions.upsertOption(id, option));
        }
    })   
}

const PollContainer = connect(mapStateToProps,mapDispatchToProps)(Poll);

PollContainer.propTypes = {
    match: PropTypes.object.isRequired,
}

export default PollContainer;

