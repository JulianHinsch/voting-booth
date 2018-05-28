import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Jumbotron extends Component {

  static propTypes = {
    loggedInUser: PropTypes.string.isRequired,
  }

  componentDidMount = () => {
    document.title="Voting Booth";
    window.scrollTo(0,0);
  }

  render = () => (
        <div className="jumbotron">
            <h1>Welcome to Voting Booth!</h1>
            <div className="jumbotron-button-container">
                <Link to="/new">
                    <button className="jumbotron-button"> Create a Poll! </button>
                </Link>
                {this.props.loggedInUser !== "" && (
                    <Link to="/mypolls">
                        <button className="jumbotron-button"> My Polls </button>
                    </Link>
                )}
                <Link to="/polls">
                    <button className="jumbotron-button"> View All Polls </button>
                </Link>
            </div>
        </div>
    );
}


