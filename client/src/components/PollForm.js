import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

export default class PollForm extends Component {

	static propTypes = {
        createPoll: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired,
	}

	constructor(props) {
		super(props);
		this.state = {
			question: "",
			options: ["","",""],
        	questionErrMsg: "",
            optionsErrMsg: "",
            canSubmit: false,
		}
	}

	componentDidMount() {
		document.title="Voting Booth | New Poll";
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let pollId = uuid.v4();
        if(this.state.canSubmit) {
            this.props.createPoll({
                id: pollId,
                question: this.state.question,
                options: this.state.options.filter(option => option !== "").map(option => ({
                    id: uuid.v4(),
                    pollId: pollId,
                    answer: option,
                    votes: 0,                    
                })),
            });
            this.props.history.push('/polls');
        }
    }
    
    handleCancel = (event) => {
        event.preventDefault();
        this.props.history.push('/');
    }
    
    handleQuestionChange = (event) => {
        this.setState({[event.target.name]:event.target.value});
        this.validateQuestion(event.target.value);
    }

    handleOptionChange = (event) => {
    	let nextOptions = this.state.options;
        nextOptions[event.target.name] = event.target.value;
        this.setState({options: nextOptions})
    	this.validateOptions(nextOptions);
    }

	validateQuestion = (question) => {
		this.setState({
            questionErrMsg: question==="" ? "This field is required." : "",
            canSubmit: this.validateForm(question, this.state.options),
        });     
	}

	validateOptions = (options) => {
        let count = 0;
        options.forEach(option => {
            if (option !== "") {
                count++;
            }
        });
        this.setState({
            optionErrMsg: count < 2 ? "Please enter at least two options." : "",
            canSubmit: this.validateForm(this.state.question, options),
        });
	}

	addAnswer = () => {
        let nextOptions = this.state.options;
        nextOptions.push("");
		this.setState({options: nextOptions});
	}

    /**
     * TODO: refactor, combine validateQuestion and validateOptions
     */
	validateForm = (question, options) => {
        if (question==="") {
            return false;
        }
		let count=0;
		options.forEach(option => {
            if (option !== "") {
                count ++;
            }
        })
		return count >= 2;
	}

	render() {
        let count = -1;
        return (
            <div className='poll-form-container content'>
                <h1> Create a new Poll! </h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='question'> Ask something... </label>
                    <input
                        name='question'
                        type='textarea'
                        onChange={this.handleQuestionChange}
                        autoFocus/>
                    <div className='err-msg'>{this.state.questionErrMsg}</div>
                    <div className='options'>
                        <label id='options'>Options</label>
                        {this.state.options.map(option => {
                            count++;
                            return (
                                <input
                                    key={count} 
                                    type='text'
                                    name={count}
                                    aria-labelledby={'options'}
                                    onChange={this.handleOptionChange}/>
                            )
                        })}
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="#4b7bec"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className='add-option'
                            onClick={this.addAnswer}>
                            <circle cx="12" cy="12" r="10" stroke="#4b7bec"></circle>
                            <line x1="12" y1="8" x2="12" y2="16" stroke="#fff"></line>
                            <line x1="8" y1="12" x2="16" y2="12" stroke="#fff"></line>
                        </svg>
                        <div className="err-msg">{this.state.optionErrMsg}</div>
                    </div>
                    <div className="button-container">
                        <button className="cancel" onClick={this.handleCancel}> Cancel </button>
                        <button 
                            type={this.state.canSubmit ? 'submit': ''}
                            className={`submit-button ${this.state.canSubmit ? '' : 'disabled'}`}
                            onClick={this.handleSubmit}>
                            Create Poll!
                        </button>
                    </div>
                </form>
            </div>
        );
	}
}
