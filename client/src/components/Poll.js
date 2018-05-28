import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Option from '../components/Option.js';

export default class Poll extends Component {

	static propTypes = {
		pollDataArray: PropTypes.object.isRequired,
		incrementOption: PropTypes.func.isRequired,
	}

	static contextTypes = {
    	router: PropTypes.object,
    	location: PropTypes.object
	}

	constructor(props) {
		super(props);
		this.state = {voted: false, showThanks: false}
	}

	getPollData = () => {
		let idOfPollToFind = this.context.router.route.match.params.id;
		let index = this.props.pollDataArray.findIndex(i => i.idx===idOfPollToFind);
		return this.props.pollDataArray.get(index);
	}
	
	calculatePercentage = (optionPopularity) => {
		let total=0;
		for (var i = 0; i < this.getPollData().options.length; i++) {
			total+=this.getPollData().options[i].popularity;
		};
		if (total!==0) {
			return ((optionPopularity/total)*100).toFixed(0)+"%";
		}
		return 0+"%";
	}

	incrementOption = (optionId) => {
		if (this.state.voted === false) {
			this.props.incrementOption(this.context.router.route.match.params.id,optionId);
			this.setState({voted: true});
			this.setState({showThanks: true});
		}
	}

	sortOptions = (options) => (options.sort((option1,option2) => (option1.popularity<=option2.popularity)))

	renderAllOptions = () => (this.sortOptions(
		this.getPollData().options).map(element=>(
			<Option
			 key={element.idx}
			 idx={element.idx}
			 answer={element.answer}
			 popularity={element.popularity}
			 percentage={this.calculatePercentage(element.popularity)}
			 incrementOption = {this.incrementOption} />
	)));

	hideThanks = () => {this.setState({showThanks: false})}

	render = () => {
        return (
            <div>
                <div className="poll-detail-view">
                    <div className="poll-detail-header">
                        {this.getPollData().question}
                    </div>
                    <div className="poll-detail-info">
                        Asked by {this.getPollData().username} on {this.getPollData().timeCreated.toDateString()}
                    </div>
                    <table className={"poll-options-table "+(this.state.voted ? "voted" : "")}>
                        <tbody>
                            {this.renderAllOptions()}
                        </tbody>
                    </table>
                    <div className="back-link-container">
                        <Link to="/polls" className="back-link"> &#9666; All Polls </Link>
                    </div>
                </div>
                <div className={"poll-thank-you-container "+(this.state.showThanks ? "visible" : "")}>
                    Thanks! Your vote has been recorded.
                    <div className="poll-thank-you-x" onClick={this.hideThanks}>
                        &#x2715;
                    </div>
                </div>
            </div>
        )
    }
}