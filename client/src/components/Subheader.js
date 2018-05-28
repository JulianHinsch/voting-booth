import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Subheader extends Component {

	static propTypes = {
		logout: PropTypes.func.isRequired,
		username: PropTypes.string.isRequired,
	}

	render = () => {
		if (this.props.username!=="") {
			return (
				<div className="subheader">
					<div className="subheader-button-container">
						<span className="sub-username"><span className="greeting">Welcome, </span>{this.props.username}</span>
						<button className="subheader-button logout" onClick={this.props.logout}>Log Out</button>
					</div>
				</div>
			);
		} else {
			return (
				<div className="subheader">
					<div className="subheader-button-container">
						<Link to='/login'><button className="subheader-button login">Log In</button></Link>
						<Link to='/signup'><button className="subheader-button signup">Sign Up</button></Link>
					</div>
				</div>
			);
		}
		
	}
}

export default Subheader;