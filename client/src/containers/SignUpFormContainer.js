import { connect } from 'react-redux';
import * as actions from '../actions/actioncreators.js';
import SignUpForm from '../components/SignUpForm.js';

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleSubmit: (username,password) => {
      dispatch( actions.createUser(username,password));
      ownProps.history.push('/');
    }
})

const SignUpFormContainer = connect(null, mapDispatchToProps)(SignUpForm);

export default SignUpFormContainer;

