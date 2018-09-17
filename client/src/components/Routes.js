import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router';

import HomeContainer from '../containers/HomeContainer';
import PollFormContainer from '../containers/PollFormContainer';
import PollListContainer from '../containers/PollListContainer';
import PollContainer from '../containers/PollContainer';
import NotFound from './NotFound';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={HomeContainer}/>
                <Route path='/new' component={PollFormContainer}/>
                <Route exact path='/polls' component={PollListContainer}/>
                <Route path='/polls/:id' component={PollContainer}/>
                <Route component={NotFound}/>
            </Switch>
        )
    }
}

export default withRouter(Routes);