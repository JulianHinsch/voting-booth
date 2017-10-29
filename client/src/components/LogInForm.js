import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import InputField from './InputField.js';
import TextLogo from './TextLogo.js';

class LogInForm extends Component {

	constructor(props) {
		super(props)
		this.state = {
			formData: {
				username: "",
	        	password: "",
			},
      		usernameErrMsg: "",
      		passwordErrMsg: "",
		}
	}

	static propTypes = {
		handleSubmit: PropTypes.func.isRequired,
	}

	componentDidMount() {
        document.title="Voting Booth | Log In";
        window.scrollTo(0,0);
 	}
 	
	handleInputChange = (event) => {
		event.preventDefault();
		let formDataCopy = this.state.formData;
		formDataCopy[event.target.name] = event.target.value;
    	this.setState({formData: formDataCopy});
    	this.validateField(event.target.name);
    }

    validateField = (fieldname) => {
		switch(fieldname){
			case 'username':
			  if (this.state.formData.username==="") {
			  	this.setState({usernameErrMsg:"This field is required."})
			  } else {
			  	this.setState({usernameErrMsg:""})
			  }
			  break;
			case 'password':
			  if (this.state.formData.password==="") {
			  	this.setState({passwordErrMsg:"This field is required."});
			  } else {
			  	this.setState({passwordErrMsg:""});
			  }
			  break;
			default:
			  break;
		}
	}

    canSubmit = () => {
      let username = this.state.formData.username;
      let password = this.state.formData.password;
      if (username!=="" && password!=="" && this.mockAuthenticate()) {
      	return true;
      }
      return false;
    }

    mockAuthenticate = () => {
    	let username = this.state.formData.username;
    	let password = this.state.formData.password;
    	let users = this.props.userDataList;
    	let usernameRegistered = false;
    	let passwordCorrect = false;
    	for (var i = 0; i < users.size; i++) {
    		if(users.getIn([i,'username'])===username) {
    			usernameRegistered = true;
    			if (users.getIn([i,'password'])===password) {
    				passwordCorrect = true;
    			};
    		}
    	};
    	if (usernameRegistered) {
    		this.setState({usernameErrMsg: ""});
	    	if (passwordCorrect) {
    			this.setState({passwordErrMsg: ""});
    			return true;
    		} else {
    			this.setState({passwordErrMsg: "Incorrect password."});
    			return false;
    		}
    	} else {
    		this.setState({usernameErrMsg: "This username is not registered."});
    		return false;
    	}
    }

    handleSubmit = (event) => {
      event.preventDefault();
      if (this.canSubmit()) {
      	this.props.handleSubmit(this.state.formData.username);
      }
    }

	render = () => (
		<div>
			<div className="header-container">
				<Link to="/" className="header-link"><TextLogo /></Link>
			</div>
			<div className="login-form-container">
				<form className="login-form" onSubmit={this.handleSubmit}>
					<h2 className="login-form-header"> Log In </h2>
					<span className="input-label"> Username </span>
					<InputField 
						name="username"
					 	type="text"
					 	handleInputChange={this.handleInputChange} 
					 	validation={this.validateField}
					 	errorMessage={this.state.usernameErrMsg}
					 	autofocus={"autofocus"} />
					<span className="input-label"> Password </span>
					<InputField 
						name="password"
						type="password"
						handleInputChange={this.handleInputChange} 
						validation={this.validateField}
						errorMessage={this.state.passwordErrMsg} />
					<div className="login-button-container">
						<button className="login-button" type="submit">Log In</button>
					</div>
				</form>
				<hr className="form-hr" />
				<div className="signup-link-container">
					{"New to Voting Booth? "}
					<Link className="signup-link" to="/signup">Sign up &#9656;</Link>
				</div> 
			</div>
		</div>
	);
}

export default LogInForm;