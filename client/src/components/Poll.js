import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Option from '../components/Option.js';

export default class Poll extends Component {

	static propTypes = {
		poll: PropTypes.object.isRequired,
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
		let total = this.props.poll.get('options').reduce((total,option) => {
            total += option.get('votes')
        }, 0);
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
        return (
            <div>
                <div className="poll-detail">
                    <h1>{this.props.poll.get('question')}</h1>
                    <h4>{new Date(this.props.poll.get('dateCreated')).toDateString()}</h4>
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
                <div className={'thanks'} style={this.state.showThanks ? null : {display: 'none'}}>
                    Thanks! Your vote has been recorded.
                    <button onClick={() => this.setState({showThanks: false})}>
                        &#x2715;
                    </button>
                </div>
            </div>
        )
    }
}