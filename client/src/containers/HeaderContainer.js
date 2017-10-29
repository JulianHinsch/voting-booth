import { connect } from 'react-redux'
import * as actions from '../actions/actioncreators.js'
import Header from '../components/Header'

const mapStateToProps = (state) => ({
  headerOpen: state.ui.get('headerOpen'),
  loggedInUser: state.users.get('loggedInUser'),
  width: state.ui.get('width'),
});

const mapDispatchToProps = (dispatch) => ({
  onHamburgerClick: () => {
    dispatch(actions.toggleSubheader());
  },
  onLogoutClick: () => {
    dispatch(actions.logOut());
  },
  onHeaderUnmount: () => {
    dispatch(actions.closeSubheader());
  },
  onWidthChange: (windowWidth) => {
    dispatch(actions.updateWidth(windowWidth));
  },
  onWidthIncrease: () => {
    dispatch(actions.closeSubheader());
  },
});

const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(Header);

export default HeaderContainer;

