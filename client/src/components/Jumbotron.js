import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Jumbotron extends Component {

  static propTypes = {
    headerOpen: PropTypes.bool.isRequired,
    loggedInUser: PropTypes.string.isRequired,
  }

  componentDidMount = () => {
    document.title="Voting Booth";
    window.scrollTo(0,0);
  }

  renderMyPollsButton = () => {
    if (this.props.loggedInUser!=="") {
      return (
        <Link to="/mypolls">
          <button className="jumbotron-button"> My Polls </button>
        </Link>
      );
    }
  }

  getOpenClass = () => (this.props.headerOpen ? "open" : "");

  render = () => (
    <div className={"jumbotron "+this.getOpenClass()}>
      <div className="jumbotron-welcome">Welcome to Voting Booth!</div>
      <div className="jumbotron-button-container">
        <Link to="/new"><button className="jumbotron-button"> Create a Poll! </button></Link>
        {this.renderMyPollsButton()}
        <Link to="/polls"><button className="jumbotron-button"> View All Polls </button></Link>
      </div>
    </div>
  );
}

export default Jumbotron;


