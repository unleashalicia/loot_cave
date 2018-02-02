import '../assets/css/game.css';

import React, {Component} from 'react';
import cardData from '../helpers/card_data';
import Card from './card';
import {doubleDeck, shuffleArray, setFirstIndex, flipCard} from "../actions/index";
import {connect} from 'react-redux';

class Game extends Component{

    componentDidMount(){
        this.props.shuffleArray(this.props.doubleDeck(cardData).payload);
    }

    handleCardClick(cardIndex) {

        let {block, index, playDeck, matchCount, attemptCount, winState} = this.props;

        if (block) return;

        if (index === null) {
            this.props.setFirstIndex(cardIndex);
        }

        flipCard(playDeck, cardIndex);

    }


    render(){

        console.log(this.props.playDeck);

        const Deck = this.props.playDeck.map((item,index)=>{
            return <Card flip={()=>{this.handleCardClick(index)}} frontImage={item.image} altImage={item.alt} cardType={item.type} isFlipped={item.flipped} key={index}/>
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
        block: state.game.blockClick,
        index: state.game.firstCardIndex,
        matchCount: state.game.matches,
        attemptCount: state.game.attempts,
        winState: state.game.gameState
    }
}

export default connect(mapStateToProps, {doubleDeck, shuffleArray, setFirstIndex, flipCard})(Game);