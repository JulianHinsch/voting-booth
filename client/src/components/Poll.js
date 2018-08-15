import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Option from '../components/Option.js';

const PollNotFound = () => {
    return (
        <div className='poll-not-found content'>              
            <h1>Poll not found. </h1>
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
			this.props.updateOption(option.get('id'), option.set('votes', option.get('votes')+1));
			this.setState({voted: true, showThanks: true});
		}
	}

	sortOptionsByVotes = (options) => {
        return options.sort((option1,option2) => option1.get('votes') <= option2.get('votes'));
    }

	render() {
        console.log(this.props.poll);
        return this.props.poll ? (
            <div>
                <div className="poll-detail content">
                    <div className='poll-inner'>
                        <h1>{this.props.poll.get('question')}</h1>
                        <h4>{new Date(this.props.poll.get('createdAt')).toDateString()}</h4>
                        <table>
                            <tbody>
                            {this.props.poll.get('options').map(option => (
                                <Option
                                    key={option.get('id')}
                                    option={option}
                                    percentage={this.calculatePercentage(option.get('votes'))}
                                    handleVote={this.handleVote}/>
                                ))}
                            </tbody>
                        </table>
                        <Link to="/polls" className="back-link"> &#9666; All Polls </Link>
                    </div>
                    <div className='thank-you-message' style={this.state.showThanks ? null : {display: 'none'}}>
                        Thanks! Your vote has been recorded.
                        <button onClick={() => this.setState({showThanks: false})}>
                            &#x2715;
                        </button>
                    </div>
                </div>
            </div>
        ) : (
            <PollNotFound/>
            
        )
    }
}