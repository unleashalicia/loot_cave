import React from 'react';
import '../assets/css/main_content.css'
import LeftBar from "./left-bar";
import Game from "./game";
import RightBar from "./right-bar";

export default () => {
    return (
        <div id="main">
            <LeftBar/>
            <Game/>
            <RightBar/>
        </div>
    )
}