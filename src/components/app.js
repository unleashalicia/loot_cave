import React from 'react';
import '../assets/css/app.css';
import Header from './header';
import MainContent from './main_content';
import Modal from './modal';

const App = () => (
    <div>
        <Header/>
        <MainContent/>
        <Modal/>
    </div>
);

export default App;
