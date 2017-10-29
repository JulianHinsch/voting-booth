import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';

import HeaderContainer from '../containers/HeaderContainer.js';
import JumbotronContainer from '../containers/JumbotronContainer.js';
import PollListContainer from '../containers/PollListContainer.js';
import PollContainer from '../containers/PollContainer.js';
import PollFormContainer from '../containers/PollFormContainer.js';
import LogInFormContainer from '../containers/LogInFormContainer.js';
import SignUpFormContainer from '../containers/SignUpFormContainer.js';
import Footer from './Footer.js';

class App extends Component {

  renderHomeLayout = () => (
    <div>
      <HeaderContainer />
      <JumbotronContainer />
    </div>
  );

  renderLogInLayout = () => (
    <LogInFormContainer history={this.props.history}/>
  );

  renderSignUpLayout = () => (
    <SignUpFormContainer history={this.props.history}/>
  );

  renderPollFormLayout = () => (
    <div>
      <HeaderContainer />
      <PollFormContainer history={this.props.history}/>
    </div>
  );

  renderPollListLayout = () => (
    <div>
      <HeaderContainer />
      <PollListContainer />
    </div>
  );

  renderMyPollsLayout = () => (
      <div>
        <HeaderContainer />
        <PollListContainer />
      </div>
  );

  renderPoll = () => (
      <div>
        <HeaderContainer />
        <PollContainer />  
      </div>
  );

  render = () => (
    <div>
      <Route exact path='/' render={this.renderHomeLayout} />
      <Route path='/signup' render={this.renderSignUpLayout} />
      <Route path='/login' render={this.renderLogInLayout} />
      <Route path='/new' render={this.renderPollFormLayout} />
      <Route exact path='/polls' render={this.renderPollListLayout} />
      <Route path='/polls/:id' render={this.renderPoll} />
      <Route path='/mypolls' render={this.renderMyPollsLayout} />
      <Footer />
    </div>
  );
}

export default withRouter(App);

