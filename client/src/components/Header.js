import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextLogo from './TextLogo.js';
import Logo from './Logo.js';
import Hamburger from './Hamburger.js';
import Subheader from './Subheader.js';

class Header extends Component {

	static propTypes = {
		onHeaderUnmount: PropTypes.func.isRequired,
		onHamburgerClick: PropTypes.func.isRequired,
		onLogoutClick: PropTypes.func,
		onWidthIncrease: PropTypes.func.isRequired,
		onWidthChange: PropTypes.func.isRequired,
		width: PropTypes.number.isRequired,
		headerOpen: PropTypes.bool.isRequired,
		loggedInUser: PropTypes.string,
	}

	componentDidMount = () => {
    	this.updateWindowDimensions();
    	window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount = () => {
    	this.props.onHeaderUnmount();
    	window.removeEventListener('resize', this.updateWindowDimensions);
  	}

	updateWindowDimensions = () => {
    	this.props.onWidthChange(window.innerWidth);
    	if(this.props.headerOpen && this.props.width>600) {
      		this.props.onWidthIncrease();
    	}
    }

  	renderControls = () => {
  		if (this.props.loggedInUser!=="") {
			return(
				<div className="controls-container">
					<span className="username"><span className="greeting">Welcome, </span>{this.props.loggedInUser}</span>
					<button className="header-button logout" onClick={this.props.onLogoutClick}>Log Out</button>
				</div>
			);
		} else {
			return(
				<div className="controls-container">
					<Link to='/login'><button className="header-button login">Log In</button></Link>
					<Link to='/signup'><button className="header-button signup">Sign Up</button></Link>
				</div>
			);
		}
  	}

	render = () => (
		<div>
			<div className="header">
				<div className="logo-container">
					<Link to="/" className="logo-small"><Logo /></Link>
					<Link to="/" className="logo-large"><TextLogo /></Link>
				</div>
				{this.renderControls()}
				<div className="hamburger-container" onClick={this.props.onHamburgerClick}>
					<Hamburger headerOpen={this.props.headerOpen}/>
				</div>
			</div>
			<Subheader 
				headerOpen={this.props.headerOpen} 
				logout={this.props.onLogoutClick}
				username={this.props.loggedInUser} />
		</div>
	);
}

export default Header;