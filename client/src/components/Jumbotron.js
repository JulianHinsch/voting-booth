import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Jumbotron extends Component {

    componentDidMount = () => {
        document.title="Voting Booth";
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>Welcome to Voting Booth!</h1>
                <div className="button-container">
                    <Link to="/new">
                        <button> Create a Poll! </button>
                    </Link>
                    <Link to="/polls">
                        <button> View All Polls </button>
                    </Link>
                </div>
            </div>
        )
    }
}


