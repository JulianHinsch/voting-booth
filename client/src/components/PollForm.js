import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import InputField from './InputField.js';

class PollForm extends Component {

	static propTypes = {
		handleSubmit: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props);
		this.state = {
			formData: {
				question: "",
				optionsArray: ["","",""],
			},
        	questionErrMsg: "",
    		optionErrMsg: "",
		}
	}

	componentDidMount() {
		document.title="Voting Booth | New Poll";
	}

	handleQuestionInputChange = (event) => {
		event.preventDefault();
		let formDataCopy = this.state.formData;
		formDataCopy[event.target.name] = event.target.value;
    	this.setState({formData: formDataCopy});
    	this.validateQuestion();
    }

    handleOptionInputChange = (event) => {
    	event.preventDefault();
    	let formDataCopy = this.state.formData;
    	formDataCopy.optionsArray[event.target.name] = event.target.value;
    	this.setState({formData: formDataCopy});
    	this.validateOptions();
    }

	validateQuestion = () => {
	  if (this.state.formData.question==="") {
		this.setState({questionErrMsg: "This field is required."});     
	  } else {
		this.setState({questionErrMsg: ""});
	  }
	}	

	validateOptions = () => {
		var count=0;
		for (var i = 0; i < this.state.formData.optionsArray.length; i++) {
			if(this.state.formData.optionsArray[i]!=="") {
			  count++;
			}
		};
		if (count<2) {
			this.setState({optionErrMsg: "Please enter at least two options."});     
		} else {
			this.setState({optionErrMsg: ""});
		}
	}

	addAnswer = () => {
		var formDataCopy = this.state.formData;
		formDataCopy.optionsArray.push("");
		this.setState({formData: formDataCopy});
	}

	renderAnswers = () => {
		var inputs = [];
		var numOfOptions = this.state.formData.optionsArray.length-1;
		for (var i = 0; i <= numOfOptions; i++) {
			inputs.push(i);
		};
		return inputs.map((el)=>{
			if (el!==numOfOptions) {
				return (<InputField
						key={el}
						name={el.toString()}
						type="text"
						placeholder=" Add an option..."
						errorMessage=""
						validation={this.validateOptions}
						handleInputChange={this.handleOptionInputChange} />
				);
			} else {
				return (
					<InputField
						key={el}
						name={el.toString()}
						type="text"
						validation={this.validateOptions}
						placeholder=" Add an option..."
						handleInputChange={this.handleOptionInputChange}
						errorMessage=""
						onFocus={this.addAnswer} />
				);	
			}
		});
	}

	canSubmit = () => {
		var options = this.state.formData.optionsArray;
		if (this.state.formData.question!=="") {
			let count=0;
		  for (var i = 0; i < options.length; i++) {
		    if(options[i]!=="") {
		      count++;
		    }
		  };
		  if (count<2) {
		  	return false;
		  }
		} else {
		  return false;
		}
		return true;
	}

	renderSubmitButton = () => {
		if (this.canSubmit()) {
			return(<button className="create-poll-button active" type="submit" onClick={this.handleSubmit}> Create Poll </button>);
		} else {
			return(<div className="create-poll-button"> Create Poll </div>);
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.handleSubmit(this.props.loggedInUser,this.state.formData.question,this.state.formData.optionsArray.filter(i => i!==""));
		this.props.history.push('/mypolls');
	}

	render = () => {
		if (this.props.loggedInUser==="") {
			return (<Redirect to="/login" />);
		} else {
			return (
				<div className="poll-form-container">
					<form className="poll-form">
						<h2 className="poll-form-header"> Create a new Poll! </h2>
						<span className="input-label"> Ask something... </span>
						<InputField
							name="question"
							type="textarea"
							handleInputChange={this.handleQuestionInputChange}
							errorMessage={this.state.questionErrMsg}
							validation={this.validateQuestion}
							autofocus={"autofocus"} />
						<span className="input-label"> Options </span>
						<div className="answer-container">
							{this.renderAnswers()}
							<div className="error-message-container">
								{this.state.optionErrMsg}
							</div>
						</div>
						<hr className="form-hr" />
						<div className="button-container">
							{this.renderSubmitButton()}
							<Link to="/"><button className="cancel-button"> Cancel </button></Link>
						</div>
					</form>
				</div>
			);
		}
	}
}

export default PollForm;
