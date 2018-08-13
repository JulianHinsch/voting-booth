import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Error from './Error';
import Loading from './Loading';
import Header from './Header';
import Router from './Router';

export default class App extends Component {

    static propTypes = {
        loadPolls: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.object,
    }

    async componentWillMount() {
        await this.props.loadPolls();
    }

    render() {
        return (
            <div>
                <Header/>
                {this.props.error ? (
                    <Error/>
                ) : this.props.loading ? (
                    <Loading/>
                ) : (
                    <Router/>                    
                )}
            </div>
        )
    }
}

