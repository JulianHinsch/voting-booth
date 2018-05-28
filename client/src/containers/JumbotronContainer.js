import { connect } from 'react-redux';
import Jumbotron from '../components/Jumbotron.js';

const mapStateToProps = (state) => ({
    loggedInUser: state.users.get('loggedInUser'),
});

const JumbotronContainer = connect(mapStateToProps, null)(Jumbotron);

export default JumbotronContainer;

