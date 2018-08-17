import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Option extends Component {

	static propTypes = {
        option: PropTypes.object.isRequired,
        percentage: PropTypes.string.isRequired,
        handleVote: PropTypes.func.isRequired,
    }

	render () {
        return (
            <tr className='option' onClick={() => this.props.handleVote(this.props.option)}>
                <td>
                    {this.props.option.get('answer')}
                </td>
                <td>
                    {this.props.option.get('votes')} votes
                </td>
                <td>
                    {this.props.percentage}%
                </td>
            </tr>
        )
    }
}