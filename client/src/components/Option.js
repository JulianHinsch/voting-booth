import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Option extends Component {

	static propTypes = {
		answer: PropTypes.string.isRequired,
		popularity: PropTypes.number.isRequired,
		percentage: PropTypes.string.isRequired,
		incrementOption: PropTypes.func.isRequired,
		idx: PropTypes.string.isRequired,
	}

	increment = () => {
		this.props.incrementOption(this.props.idx);
	}

	render = () => (
		<tr className={"poll-option"} onClick={this.increment}>
			<td className="poll-option-text">
				{this.props.answer}
			</td>
			<td className="poll-option-data">
				{this.props.popularity} votes
				<div className="poll-option-percentage">
					{this.props.percentage}
				</div>
			</td>
		</tr>
	);
}