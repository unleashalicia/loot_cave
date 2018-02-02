import React from 'react';


import '../assets/css/card.css';

const Card = props => {
    return (
        <div className="card-container">
            <div className={`front ${props.cardType} ${props.altImage}`}>
                <img src={props.frontImage} alt={props.altImage} />
            </div>
            <div onClick={props.flip} className={`back ${props.isFlipped ? 'transparent' : ''}`}></div>
        </div>
    )
};

export default Card;