import React, {Component} from 'react';

import '../assets/css/card.css';

class Card extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="card-container">
                <div className={`front ${this.props.cardType} ${this.props.altImage} ${this.props.isMatched ? 'grayscale' : ''}`}>
                    <img src={this.props.frontImage} alt={this.props.altImage} />
                </div>
                <div onClick={this.props.flip} className={`back ${this.props.isFlipped ? 'transparent' : ''}`}></div>
            </div>
        )
    }
};

export default Card;