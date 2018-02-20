import React from 'react';
import logo from '../assets/images/dragon_logo.png';
import '../assets/css/header.css';

export default () => {
    return (
        <div id="header">
            <div>
                <div>
                    <div className="img-container">
                        <img src={logo} alt="dragon logo"/>
                        <h3 className="making-of-link big-hide"><a href="http://www.aliciaadamsevans.com" target="_blank">Author Page</a></h3>
                    </div>
                </div>
            </div>
            <div>
                <h1>Loot Cave</h1>
            </div>
            <div>
                <h3 className="making-of-link small-hide"><a href="http://www.aliciaadamsevans.com" target="_blank">Author Page</a></h3>
                <div id="orientation-message">
                    <p>For stats, switch to landscape.</p>
                </div>
            </div>
        </div>
    )
}