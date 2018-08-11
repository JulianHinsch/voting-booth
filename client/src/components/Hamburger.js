// Hamburger by Jon Suh https://github.com/jonsuh

import React, {Component} from 'react';

const Hamburger = () => (
    <button className={"hamburger hamburger--vortex-r "} type="button" aria-label="Menu" aria-controls="navigation">
        <span className="hamburger-box">
            <span className="hamburger-inner"></span>
        </span>
    </button>
)

export default Hamburger;