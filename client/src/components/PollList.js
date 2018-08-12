import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
				<h1>Polls</h1>
                {this.props.polls.size > 0 ? this.props.polls.map(poll => (
                    <Link
                        to={`/polls/${poll.get('id')}`}
                        key={poll.get('id')}>
                            <div className='poll'>
                                {poll.get('question')}
                            </div>
                    </Link>
                )) : (
                    <div className='poll'>No Polls</div>
                )}
                <div className='link-container'>
                    <div className='back'>
                        &#9666; <Link to="/">Back</Link>
                    </div>
                    <div className='add-a-poll'>
                        <Link to="/new">Add a Poll</Link> &#9656; 
                    </div>
                </div>
			</div>
		);
	}
}

