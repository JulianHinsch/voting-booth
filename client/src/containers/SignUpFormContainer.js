import { connect } from 'react-redux';
import * as actions from '../actions/actioncreators.js';
import SignupForm from '../components/SignupForm.js';

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        handleSubmit: (username,password) => {
            dispatch(actions.createUser(username,password));
            ownProps.history.push('/');
        }
    });   
}

const SignupFormContainer = connect(null, mapDispatchToProps)(SignupForm);

export default SignupFormContainer;

