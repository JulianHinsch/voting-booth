import { connect } from 'react-redux'

import * as actions from '../actions/actioncreators.js';
import App from '../components/App.js';

const mapStateToProps = (state, ownProps) => {
    return ({
        loading: state.polls.get('loading'),
        error: state.polls.get('error'),
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        loadPolls: () => {
            dispatch(actions.loadPolls());
        }
    })   
}

const AppContainer = connect(mapStateToProps,mapDispatchToProps, null, {pure: false})(App); 
//fix the routes not updating on url change

export default AppContainer;