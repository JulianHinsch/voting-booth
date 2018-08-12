import React from 'react';
import { Link } from 'react-router-dom';

const Jumbotron = (props) => {
    return (
        <div className="content jumbotron">
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

export default Jumbotron;


