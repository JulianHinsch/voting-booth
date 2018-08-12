import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Hamburger from './Hamburger.js';

export default class Header extends Component {
	render() {
        return (
            <header>
                <Link to="/" className="logo-container">
                    <img 
                        className='logo'
                        src={require('../assets/logo.png')} 
                        alt="Voting Booth" />
                    <img 
                        className='text-logo'
                        src={require('../assets/textlogo.png')} 
                        alt="Voting Booth"/>
                </Link>
            </header>
        )
    }
}
