import { connect } from 'react-redux'
import * as actions from '../actions/actioncreators.js'
import Header from '../components/Header'

const mapStateToProps = (state) => ({
    loggedInUser: state.users.get('loggedInUser'),
});

const mapDispatchToProps = (dispatch) => ({
    onLogoutClick: () => {
        dispatch(actions.logOut());
    },
});

const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(Header);

export default HeaderContainer;

