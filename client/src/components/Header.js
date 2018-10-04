import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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

export default Header;
