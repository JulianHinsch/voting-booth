import {connect} from 'react-redux';
import * as actions from '../actions/actioncreators.js';
import LogInForm from '../components/LogInForm.js';

const mapStateToProps = (state, ownProps) => ({
	userDataList: state.users.get('userDataArray'),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleSubmit: (username) => {
      dispatch( actions.logIn(username));
      ownProps.history.push('/');
    },
});

const LogInFormContainer = connect(mapStateToProps, mapDispatchToProps)(LogInForm);

export default LogInFormContainer;
