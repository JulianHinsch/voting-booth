// Hamburger by Jon Suh https://github.com/jonsuh

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Hamburger extends Component {

	static propTypes = {
		headerOpen: PropTypes.bool.isRequired,
	}

	getOpenClass = () => (this.props.headerOpen ? "open" : "")

	render = () => (
		<button id="hamburger-button" className={"hamburger hamburger--vortex-r "+this.getOpenClass()} type="button" aria-label="Menu" aria-controls="navigation">
			<span className="hamburger-box"><span className="hamburger-inner"></span></span>
		</button>
	)
}