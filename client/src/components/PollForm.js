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

    componentWillMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

	componentDidMount() {
        document.title="Voting Booth | New Poll";
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        //'enter' key
        if(event.keyCode === 13) {
            event.preventDefault();
            this.handleSubmit();
        }
    }

    handleSubmit = () => {
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

	addOption = () => {
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
                <div className='form'>
                    <Link className='back-link' to="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        Home
                    </Link>
                    <h1> Create a new Poll! </h1>
                    <label htmlFor='question'> Ask anything... </label>
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
                        <p className="err-msg">{this.state.optionErrMsg}</p>
                        <p className='add-option' onClick={this.addOption}>Add an option...</p>
                        <button 
                            className={`submit-button ${this.state.canSubmit ? '' : 'disabled'}`}
                            onClick={this.handleSubmit}>
                            Create Poll
                        </button>
                    </div>
                </div>
            </div>
        );
	}
}


/*

<button 
    type={this.state.canSubmit ? 'submit': ''}
    className={`submit-button ${this.state.canSubmit ? '' : 'disabled'}`}
    onClick={this.handleSubmit}>
    Create Poll!
</button>

*/
