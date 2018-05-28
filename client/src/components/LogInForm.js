import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import InputField from './InputField.js';
import TextLogo from './TextLogo.js';

export default class LogInForm extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        userDataList: PropTypes.array.isRequired,
    }
    
	constructor(props) {
		super(props)
		this.state = {
            username: "",
            password: "",
      		usernameErrMsg: "",
      		passwordErrMsg: "",
		}
	}

	componentDidMount() {
        document.title="Voting Booth | Log In";
        window.scrollTo(0,0);
 	}
 	
	handleInputChange = (event) => {
		event.preventDefault();
    	this.setState({[event.target.name]: event.target.value});
    	this.validateField(event.target.name);
    }

    validateField = (fieldname) => {
		switch(fieldname){
			case 'username':
                if (this.state.username==="") {
                    this.setState({usernameErrMsg:"This field is required."})
                } else {
                    this.setState({usernameErrMsg:""})
                }
                break;
			case 'password':
                if (this.state.password==="") {
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
        if (this.state.username === "" ||  this.state.password === "") {
            return false;
        } else if (!this.mockAuthenticate()) {
            return false;
        }
        return true;
    }

    mockAuthenticate = () => {
    	let users = this.props.userDataList;
    	let usernameRegistered = false;
    	let passwordCorrect = false;
    	for (let i = 0; i < users.size; i++) {
    		if(users.getIn([i,'username']) === this.state.username) {
    			usernameRegistered = true;
    			if (users.getIn([i,'password']) === this.state.password) {
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
      	    this.props.handleSubmit(this.state.username);
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
					New to Voting Booth?
					<Link className="signup-link" to="/signup"> Sign up &#9656;</Link>
				</div> 
			</div>
		</div>
	);
}
