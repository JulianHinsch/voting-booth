import { connect } from 'react-redux';
import Jumbotron from '../components/Jumbotron.js';

const mapStateToProps = (state) => ({
    loggedInUser: state.users.get('loggedInUser'),
    headerOpen: state.ui.get('headerOpen'),
 });

const JumbotronContainer = connect(mapStateToProps, null)(Jumbotron);

export default JumbotronContainer;

