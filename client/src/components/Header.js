import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextLogo from './TextLogo.js';
import Logo from './Logo.js';
//import Hamburger from './Hamburger.js';

export default class Header extends Component {
	render() {
        return (
            <header>
                <div className="inner">
                    <div className="logo-container">
                        <Link to="/" className="logo-small"><Logo /></Link>
                        <Link to="/" className="logo-large"><TextLogo /></Link>
                    </div>
                </div>
            </header>
        )
    }
}