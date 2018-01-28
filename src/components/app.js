import React from 'react';
import '../assets/css/app.css';
import Header from './header';
import Game from './game';
import LeftBar from "./left-bar";
import RightBar from './right-bar';

const App = () => (
    <div>
        <Header/>
        <LeftBar/>
        <Game/>
        <RightBar/>
    </div>
);

export default App;
