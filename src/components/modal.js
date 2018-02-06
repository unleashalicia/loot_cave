import React from 'react';
import messages from '../helpers/modal_messages';
import '../assets/css/modal.css';
import '../assets/images/graphpaper.jpg';

export default props => {
    return (
        <div id="outer-modal">
            <div id="inner-modal">
                <p>{messages.welcome}</p>
            </div>
        </div>
    )
}