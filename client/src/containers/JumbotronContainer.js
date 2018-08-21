import { connect } from 'react-redux'

import Jumbotron from '../components/Jumbotron.js';

const mapStateToProps = (state, ownProps) => {
    return ({
        loading: state.polls.get('loading'),
    })
}

const JumbotronContainer = connect(mapStateToProps, null)(Jumbotron); 

export default JumbotronContainer;