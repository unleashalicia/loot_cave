import '../assets/css/game.css';

import React, {Component} from 'react';
import cardData from '../helpers/card_data';
import Card from './card';
import {doubleDeck, shuffleArray, setFirstIndex, flipCard, addGold} from "../actions/index";
import {connect} from 'react-redux';

class Game extends Component{
    constructor(props){
        super(props);

        this.blockClick = false;
    }


    componentDidMount(){
        this.props.shuffleArray(this.props.doubleDeck(cardData).payload);
    }

    handleCardClick(cardIndex) {

        let {
            index,
            playDeck,
            matchCount,
            attemptCount,
            winState,
            gp,
            setFirstIndex,
            flipCard,
            addGold
            } = this.props;

        if (this.blockClick) return;

        if (index === null) {
            setFirstIndex(cardIndex);
            flipCard(playDeck, cardIndex);
        } else {
            this.blockClick = true;
            flipCard(playDeck, cardIndex);
            if (playDeck[cardIndex].image === playDeck[index].image) {

                switch (playDeck[index].type){
                    case "treasure":
                        console.log("GP: ", gp);
                        console.log("wealth: ", playDeck[index].worth);
                        addGold(gp, playDeck[index].worth);
                        console.log('treasure');
                        break;
                    case "weapon":
                        addGold(gp, playDeck[index].worth);
                        console.log('weapon');
                        break;
                    case "armor":
                        addGold(gp, playDeck[index].worth);
                        console.log('armor');
                        break;
                    case "dragon":
                        console.log('dragon');
                        break;
                    default:
                        console.err('There was trouble with this match.');

                }

                console.log("It's a match!");
                this.blockClick = false;
            } else {
                console.log("It's not a match.");
                setTimeout(()=>{
                    flipCard(playDeck, index);
                    flipCard(playDeck, cardIndex);
                    this.blockClick = false;
                }, 1500)
            }

            setFirstIndex(null);
        }

    }


    render(){

        console.log("First card index: ", this.props.index);

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
        index: state.game.firstCardIndex,
        matchCount: state.game.matches,
        attemptCount: state.game.attempts,
        winState: state.game.gameState,
        gp: state.game.gold
    }
}

export default connect(mapStateToProps, {doubleDeck, shuffleArray, setFirstIndex, flipCard, addGold})(Game);