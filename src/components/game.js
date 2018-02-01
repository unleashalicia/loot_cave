import '../assets/css/game.css';

import React, {Component} from 'react';
import cardData from '../helpers/card_data';
import Card from './card';
import {doubleDeck} from "../actions/index";
import {connect} from 'react-redux';


class Game extends Component{

    handleCardClick(cardIndex){
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

function mapStateToProps(state){
    return {
        playDeck: state.game.deck
    }
}

export default connect(mapStateToProps, {doubleDeck})(Game);