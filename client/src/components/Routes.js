import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router';

import JumbotronContainer from '../containers/JumbotronContainer';
import PollFormContainer from '../containers/PollFormContainer';
import PollListContainer from '../containers/PollListContainer';
import PollContainer from '../containers/PollContainer';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={JumbotronContainer}/>
                <Route path='/new' component={PollFormContainer}/>
                <Route exact path='/polls' component={PollListContainer}/>
                <Route path='/polls/:id' component={PollContainer}/>
            </Switch>
        )
    }
}

export default withRouter(Routes);