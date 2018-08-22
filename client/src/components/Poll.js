import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Option from '../components/Option.js';

const PollNotFound = () => {
    return (
        <div className='poll-not-found content'>              
            <h1> Poll not found. </h1>
            <Link to="/polls" className="back-link"> &#9666; All Polls </Link>
        </div>
    )
}

export default class Poll extends Component {

	static propTypes = {
		poll: PropTypes.object,
		updateOption: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props);
		this.state = {
            voted: false,
            showThanks: false,
        }
	}
	
	calculatePercentage = (votes) => {
        let total = 0;
		this.props.poll.get('options').forEach(option => total += option.get('votes'));
		return total === 0 ? total : ((votes/total)*100).toFixed(0);
	}

	handleVote = (option) => {
		if (!this.state.voted) {
			this.props.updateOption(option.get('id'), option.set('votes', (option.get('votes')+1)));
			this.setState({voted: true, showThanks: true});
		}
	}

	sortOptionsByVotes = (options) => {
        return options.sort((option1,option2) => option1.get('votes') <= option2.get('votes'));
    }

	render() {
        return this.props.poll ? (
            <div>
                <div className="poll-detail content">
                    <div className='poll-detail-inner'>
                        <h1>{this.props.poll.get('question')}</h1>
                        <h4>{moment(this.props.poll.get('createdAt')).fromNow()}</h4>
                        <table>
                            <tbody>
                            {this.props.poll.get('options').map(option => (
                                <Option
                                    key={option.get('id')}
                                    option={option}
                                    percentage={this.calculatePercentage(option.get('votes'))}
                                    handleVote={this.handleVote}
                                    voted={this.state.voted}/>
                                ))}
                            </tbody>
                        </table>
                        <div className='back-link'>
                            <Link to="/polls"> &#9666; All Polls </Link>
                        </div>
                    </div>
                </div>
                <div className='thank-you-message' style={this.state.showThanks ? null : { display: 'none' }}>
                    Thanks! Your vote has been recorded.
                    <button onClick={() => this.setState({showThanks: false})}>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="#336527" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>
        ) : (
            <PollNotFound/>     
        )
    }
}