import '../assets/css/game.css';

import React, {Component} from 'react';
import cardData from '../helpers/card_data';
import Card from './card';


class Game extends Component{

    handleCardClick(cardIndex){
        // if();
        console.log("card clicked.  Card Index: ", cardIndex);
    }

    render(){

        const Deck = cardData.map((item,index)=>{
            return <Card flip={()=>{this.handleCardClick(index).bind(this)}} frontImage={item.image} altImage={item.alt} cardType={item.type} key={index}/>
        });

        return (
            <div id="game-board">
                {Deck}
            </div>
        );
    }
}

export default Game;