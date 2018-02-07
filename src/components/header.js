import React from 'react';
import logo from '../assets/images/dragon_logo.png';
import '../assets/css/header.css';

export default () => {
    return (
        <div id="header">
            <div>
                <div>
                    <img src={logo} alt="dragon logo"/>
                </div>
            </div>
            <div>
                <h1>Loot Cave</h1>
            </div>
            <div>
                <h3 className="making-of-link"><a href="#" target="_blank">Instructions</a></h3>
            </div>
        </div>
    )
}