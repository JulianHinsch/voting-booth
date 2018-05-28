import {connect} from 'react-redux';
import * as actions from '../actions/actioncreators.js';
import LoginForm from '../components/LoginForm.js';

const mapStateToProps = (state, ownProps) => {
    return ({
        userDataList: state.users.get('userDataArray'),        
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        handleSubmit: (username) => {
            dispatch(actions.logIn(username));
            ownProps.history.push('/');
        },
    })
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginFormContainer;
