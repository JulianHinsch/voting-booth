import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Option = (props) => (
    <tr
        className={`option ${props.voted ? 'disabled' : ''}`}
        onClick={() => props.handleVote(props.option)}>
        <td>
            {props.option.get('answer')}
        </td>
        <td>
            {props.option.get('votes')} votes
        </td>
        <td>
            {props.percentage}%
        </td>
    </tr>
)

Option.propTypes = {
    option: PropTypes.object.isRequired,
    percentage: PropTypes.string.isRequired,
    handleVote: PropTypes.func.isRequired,
    voted: PropTypes.bool.isRequired,
}

export default Option;