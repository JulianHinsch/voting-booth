import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loading from './Loading';

const Jumbotron = (props) => {
    return props.loading ? <Loading/> : (
        <div className="content jumbotron">
            <h1>Welcome to Voting Booth!</h1>
            <Link to="/new">
                <button> Create a Poll </button>
            </Link>
            <Link to="/polls">
                <button> View All Polls </button>
            </Link>
        </div>
    )
}

Jumbotron.propTypes = {
    loading: PropTypes.bool.isRequired,
}

export default Jumbotron;


