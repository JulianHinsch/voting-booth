import { connect } from 'react-redux'

import Home from '../components/Home.js';

const mapStateToProps = (state, ownProps) => {
    return ({
        loading: state.polls.get('loading'),
    })
}

const HomeContainer = connect(mapStateToProps, null)(Home); 

export default HomeContainer;