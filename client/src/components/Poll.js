import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Option from './Option.js';
import OptionResults from './OptionResults';
import NotFound from './NotFound.js'

export default class Poll extends Component {

	static propTypes = {
		poll: PropTypes.object,
		updateOption: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props);
		this.state = {
            voted: false,
            selectedOption: undefined,
        }
	}
	
	calculatePercentage = (votes) => {
        let total = 0;
        this.props.poll.get('options').forEach(option => {
            total += option.get('votes')
        });
		return total === 0 ? total.toString() : ((votes/total)*100).toFixed(0);
    }
    
    handleSelect = (option) => {
        if(!this.state.voted) {
            this.setState({selectedOption: option});
        }
    }

	handleVote = (option) => {
		if (!this.state.voted) {
			this.props.updateOption(option.get('id'), option.set('votes', (option.get('votes')+1)));
			this.setState({voted: true});
		}
	}

	sortOptionsByVotes = (options) => {
        return options.sort((option1,option2) => option1.get('votes') <= option2.get('votes'));
    }

	render() {
        return this.props.poll ? (
            <div>
                <div className="poll-detail content">      
                    <div className='back-link'>
                        <Link to="/polls"> &#9666;  All Polls </Link>
                    </div>
                    <h1>{this.props.poll.get('question')}</h1>
                    <h4>Asked {moment(this.props.poll.get('createdAt')).fromNow()}</h4>
                    {this.props.poll.get('options').map(option => (
                        <Option
                            key={option.get('id')}
                            option={option}
                            handleSelect={this.handleSelect}
                            selected={this.state.selectedOption && (
                                option.get('id') === this.state.selectedOption.get('id')
                            )}
                            voted={this.state.voted}/>
                    ))}
                    {this.state.voted && this.props.poll.get('options').map(option => (
                        <OptionResults
                            key={option.get('id')}
                            option={option}
                            percentage={this.calculatePercentage(option.get('votes'))}/>
                    ))}
                    {(!this.state.voted && !this.state.selectedOption) && (
                        <button className='disabled'>Submit</button>
                    )}
                    {(this.state.selectedOption && !this.state.voted && !this.props.loading) && (
                        <button 
                            className='submit' 
                            onClick={() => this.state.selectedOption && this.handleVote(this.state.selectedOption)}>
                            Submit
                        </button>
                    )}
                    {(!this.state.voted && this.props.loading) && (
                        <button className='loading'>Loading...</button>
                    )}
                    {this.state.voted && (
                        <button className='thanks'>Thanks!</button>
                    )}
                </div>
            </div>
        ) : (
            <NotFound/>     
        )
    }
}