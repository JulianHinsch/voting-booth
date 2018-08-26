import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class PollForm extends Component {

	static propTypes = {
		createPoll: PropTypes.func.isRequired,
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
        if (this.state.canSubmit) {
            this.props.createPoll(this.state.question, this.state.options.filter(el => el!==""));
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
		this.setState({questionErrMsg: question==="" ? "This field is required." : ""});     
	}

	validateOptions = (options) => {
        let count = 0;
        options.forEach(option => {
            if (option !== "") {
                count++;
            }
        });
		if (count < 2) {
            this.setState({optionErrMsg: count < 2 ? "Please enter at least two options." : ""});
        }    
	}

	addAnswer = () => {
        let nextOptions = this.state.options;
        nextOptions.push("");
		this.setState({options: nextOptions});
	}

	canSubmit = () => {
        if (this.state.question==="") {
            return false;
        }
		let count=0;
		this.state.options.forEach(option => {
            if (option !== "") {
                count ++;
            }
        })
		return count > 2;
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
                        <div className="err-msg">{this.state.optionErrMsg}</div>
                    </div>
                    <div className="button-container">
                        <Link to="/"><button className="cancel"> Cancel </button></Link>
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
