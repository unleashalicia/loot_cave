import React from 'react';
import '../assets/css/app.css';
import Header from './header';
import MainContent from './main_content';
import Modal from './modal';
import MatchGuide from './match-guide';

const App = () => (
    <div>
        <Header/>
        <MainContent/>
        <Modal/>
        <MatchGuide/>

    </div>
);

export default App;
