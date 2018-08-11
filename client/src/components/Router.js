import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router';

import Jumbotron from './Jumbotron';
import PollFormContainer from '../containers/PollFormContainer';
import PollListContainer from '../containers/PollListContainer';
import PollContainer from '../containers/PollContainer';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Jumbotron}/>
                <Route path='/new' component={PollFormContainer}/>
                <Route exact path='/polls' component={PollListContainer}/>
                <Route path='/polls/:id' component={PollContainer}/>
            </Switch>
        )
    }
}

export default withRouter(Router);