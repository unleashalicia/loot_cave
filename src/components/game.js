import '../assets/css/game.css';

import React, {Component} from 'react';
import cardData from '../helpers/card_data';
import Card from './card';
import {doubleDeck, shuffleArray} from "../actions/index";
import {connect} from 'react-redux';

class Game extends Component{

    componentDidMount(){
        this.props.shuffleArray(this.props.doubleDeck(cardData).payload);
    }

    handleCardClick(cardIndex){
        console.log("card clicked.  Card Index: ", cardIndex);
        if (!this.props.block){
            console.log("Eureka!");
        }
    }

    render(){

        const Deck = this.props.playDeck.map((item,index)=>{
            return <Card flip={()=>{this.handleCardClick(index)}} frontImage={item.image} altImage={item.alt} cardType={item.type} key={index}/>
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
        playDeck: state.game.deck,
        block: state.game.blockClick
    }
}

export default connect(mapStateToProps, {doubleDeck, shuffleArray})(Game);