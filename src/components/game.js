import '../assets/css/game.css';

import React, {Component} from 'react';
import cardData from '../helpers/card_data';
import Card from './card';
import {doubleDeck, shuffleArray, setFirstIndex} from "../actions/index";
import {connect} from 'react-redux';

class Game extends Component{

    componentDidMount(){
        this.props.shuffleArray(this.props.doubleDeck(cardData).payload);
    }

    handleCardClick(cardIndex) {

        let {block, index, matchCount, attemptCount, winState} = this.props;

        console.log("card clicked.  Card Index: ", cardIndex);

        if (block) return;

        if (index === null) {
            console.log('First card clicked!!!');
            this.props.setFirstIndex(cardIndex);
        }

        console.log("index: ", this.props.index);
    }


    render(){

        console.log("New index? ", this.props.index);

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
        block: state.game.blockClick,
        index: state.game.firstCardIndex,
        matchCount: state.game.matches,
        attemptCount: state.game.attempts,
        winState: state.game.gameState
    }
}

export default connect(mapStateToProps, {doubleDeck, shuffleArray, setFirstIndex})(Game);