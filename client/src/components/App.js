import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Error from './Error';
import Header from './Header';
import Routes from './Routes';

export default class App extends Component {

    static propTypes = {
        loadPolls: PropTypes.func.isRequired,
        error: PropTypes.object,
    }

    async componentWillMount() {
        await this.props.loadPolls();
    }

    render() {
        return (
            <div className='page'>
                <Header/>
                {this.props.error ? (
                    <Error/>
                ) : (
                    <Routes/>                    
                )}
            </div>
        )
    }
}

