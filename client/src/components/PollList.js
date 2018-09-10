import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class PollList extends Component {

	static propTypes = {
		polls: PropTypes.object.isRequired,
	}

	componentDidMount() {
		document.title = 'Voting Booth | Polls';
	}

	render() {
		return (
			<div className="content poll-list">
				<h1>All Polls</h1>
                <div className='link-container'>
                    <div className='back'>
                        <Link to="/">
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
                    </div>
                    <div className='add-a-poll'>
                        <Link to="/new">
                            Add a Poll
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
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </Link> 
                    </div>
                </div>
                {this.props.polls.size > 0 ? this.props.polls.map(poll => (
                    <div className='poll' key={poll.get('id')}>                     
                        <Link to={`/polls/${poll.get('id')}`}>
                            {poll.get('question')}
                        </Link>
                        <p>Asked {moment(poll.get('createdAt')).fromNow()}</p>
                        <hr/>
                    </div>
                )) : (
                    <div className='poll'>No Polls</div>
                )}
			</div>
		);
	}
}

