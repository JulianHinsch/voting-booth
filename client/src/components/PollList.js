import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';

export default class PollList extends Component {

	static propTypes = {
		pollDataArray: PropTypes.object.isRequired,
		filter: PropTypes.string.isRequired,
	}

	static contextTypes = {
    	router: PropTypes.object,
    	location: PropTypes.object
	}

	componentDidMount = () => {
		document.title="Voting Booth | "+this.getTitle();
	}

	getTitle = () => {
		if (this.context.router.route.location.pathname==="/mypolls") {
			return "My Polls";
		}
		return "Polls";
	}

	renderPolls = () => {
		let pollsToShow = this.props.pollDataArray.map((element) => {
			if (this.getTitle()==="Polls" || element.username===this.props.filter) {
				return (
					<Link className={"poll-link"} to={"/polls/"+element.idx} key={element.idx}>
						<div className="poll-list-view">
							{element.question}
						</div>
					</Link>
				);
			}
			return null;
		});
		for (var i = 0; i < pollsToShow.size; i++) {
			if (pollsToShow.get(i)!==null) {
				return pollsToShow;
			}
		};
		return <div>No Polls Found.</div>;
	}

	render = () => {
		if (this.getTitle()==="My Polls" && this.props.filter==="") {
			return (<Redirect to="/login" />);
		};
		return (
			<div className="poll-list-container">
				<div className="poll-list-header">{this.getTitle()}</div>
				{this.renderPolls()}
				<div className="back-link-container">
					<Link to="/" className="back-link"> &#9666; Back </Link>
				</div>
			</div>
		);
	}
}

