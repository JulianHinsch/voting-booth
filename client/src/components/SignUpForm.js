import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InputField from './InputField.js';
import TextLogo from './TextLogo.js';

class SignUpForm extends Component {

	static propTypes = {
		handleSubmit: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props)
		this.state = {
            username: "",
            password: "",
            password2: "",
			usernameErrMsg: "",
			passwordErrMsg: "",
			password2ErrMsg: "",
	    }
	}

	componentDidMount() {
		document.title="Voting Booth | Sign Up";
		window.scrollTo(0,0);
	}

	handleInputChange = (event) => {
		event.preventDefault();
        this.setState({[event.target.name]: event.target.value});
    	this.validateField(event.target.name);
    }

	validateField = (fieldname) => {
        switch(fieldname) {
            case 'username':
                if (this.state.username==="") {
                    this.setState({usernameErrMsg:"This field is required."});
                } else {
                    this.setState({usernameErrMsg:""});
                }
                break;
            case 'password':
                if (this.state.password==="") {
                    this.setState({passwordErrMsg:"This field is required."});
                } else if (this.state.password.length<8) {
                    this.setState({passwordErrMsg:"Password must be at least 8 characters."});
                } else if (!/\d/.test(this.state.password)) {
                    this.setState({passwordErrMsg:"Password must contain a number."});
                } else {
                    this.setState({passwordErrMsg:""});
                    if(this.state.password2!=="") {
                        this.validateField('password2');
                    }
                }
                break;
            case 'password2':
                if (this.state.password2==="") {
                    this.setState({password2ErrMsg:"This field is required."});
                } else if (this.state.password2!==this.state.password) {
                    this.setState({password2ErrMsg:"Passwords do not match."});
                } else {
                    this.setState({password2ErrMsg:""});
                }
                break;
            default:
                break;
        }
	}

	canSubmit = () => {
		if (this.state.username === "") {
            return false;
        } else if (this.state.password.length <= 7) {
            return false;
        } else if (!/\d/.test(this.state.password)) {
            return false;
        } else if (this.state.password2 !== this.state.password) {
			return false;
		}
		return true;
	}

   	handleSubmit = (event) => {
        event.preventDefault();
        if (this.canSubmit()) {
      	    this.props.handleSubmit(this.state.username,this.state.password);
        }
    }

	render = () => (
		<div>
			<div className="header-container">
				<Link to="/" className="header-link"><TextLogo /></Link>
			</div>
			<div className="signup-form-container">
				<form className="signup-form">
					<h2 className="signup-form-header"> Sign Up </h2>
					<span className="input-label"> Username* </span>
					<InputField 
						name="username"
					 	type="text"
					 	handleInputChange={this.handleInputChange} 
					 	validation={this.validateField}
					 	errorMessage={this.state.usernameErrMsg}
					 	autofocus={"autofocus"} />
					<span className="input-label"> Password* </span>
					<InputField 
						name="password" 
						type="password"
						placeholder="At least 8 characters and 1 number" 
						handleInputChange={this.handleInputChange} 
						validation={this.validateField}
						errorMessage={this.state.passwordErrMsg} />
					<span className="input-label"> Re-enter Password* </span>
					<InputField 
						name="password2"
						type="password"
						handleInputChange={this.handleInputChange} 
						validation={this.validateField}
						errorMessage={this.state.password2ErrMsg} />
					<div className="signup-button-container">
						<button 
                            className={"signup-button "+(this.canSubmit() ? "active" : "")} 
                            type="submit" 
                            onClick={this.handleSubmit}>
                            Create an Account
                        </button>
					</div>
				</form>
				<hr className="form-hr" />
				<div className="login-link-container">
					Already have a Voting Booth account?
					<Link className="login-link" to="/login">Log in &#9656; </Link>
				</div> 
			</div>
		</div>
	);
}

export default SignUpForm;