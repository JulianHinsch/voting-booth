import React, {Component} from 'react';

import Header from './Header';
import Router from './Router'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Router/>
            </div>
        )
    }
}

