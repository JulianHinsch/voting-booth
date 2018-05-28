import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';

import HeaderContainer from '../containers/HeaderContainer.js';
import JumbotronContainer from '../containers/JumbotronContainer.js';
import PollListContainer from '../containers/PollListContainer.js';
import PollContainer from '../containers/PollContainer.js';
import PollFormContainer from '../containers/PollFormContainer.js';
import LoginFormContainer from '../containers/LoginFormContainer.js';
import SignupFormContainer from '../containers/SignupFormContainer.js';

class App extends Component {
    render = () => {
        return (
            <div>
                <Route exact path='/' render={()=>(
                    <div>
                        <HeaderContainer />
                        <JumbotronContainer />
                    </div>
                )}/>
                <Route path='/signup' render={()=>(
                    <SignupFormContainer history={this.props.history}/>
                )}/>
                <Route path='/login' render={()=>(
                    <LoginFormContainer history={this.props.history}/>
                )}/>
                <Route path='/new' render={()=>(
                    <div>
                        <HeaderContainer/>
                        <PollFormContainer history={this.props.history}/>
                    </div>
                )}/>
                <Route exact path='/polls' render={()=>(
                    <div>
                        <HeaderContainer/>
                        <PollListContainer/>
                    </div>
                )} />
                <Route path='/polls/:id' render={()=>(
                    <div>
                        <HeaderContainer/>
                        <PollContainer/>  
                    </div>
                )}/>
                <Route path='/mypolls' render={()=>(
                    <div>
                        <HeaderContainer/>
                        <PollListContainer/>
                    </div>
                )}/>
            </div>
        )
    }
}

export default withRouter(App);

