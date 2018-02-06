import '../assets/css/game.css';

import React, {Component} from 'react';
import cardData from '../helpers/card_data';
import Card from './card';
import {doubleDeck, shuffleArray, setFirstIndex, flipCard, addGold, findArmor, findWeapon, fillInventory} from "../actions/index";
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
            hp,
            winState,
            gp,
            armoury,
            setFirstIndex,
            flipCard,
            addGold,
            findArmor,
            findWeapon,
            fillInventory
            } = this.props;

        if (this.blockClick) return;

        if (index === null) {
            setFirstIndex(cardIndex);
            flipCard(playDeck, cardIndex);
        } else {
            this.blockClick = true;
            flipCard(playDeck, cardIndex);
            if (playDeck[cardIndex].image === playDeck[index].image) {

                switch (playDeck[index].type){ //put below in cleanup
                    case "treasure":
                        addGold(gp, playDeck[index].worth);
                        break;
                    case "weapon":
                        addGold(gp, playDeck[index].worth);
                        findWeapon();
                        fillInventory(armoury, "sword");
                        break;
                    case "armor":
                        addGold(gp, playDeck[index].worth);
                        findArmor(hp);
                        fillInventory(armoury, "chainmail");
                        break;
                    case "dragon":
                        console.log('dragon');

                }

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
        winState: state.game.gameState,
        gp: state.game.gold,
        hp: state.game.playerHP,
        armoury: state.game.inventory
    }
}

export default connect(mapStateToProps, {doubleDeck, shuffleArray, setFirstIndex, flipCard, addGold, findArmor, findWeapon, fillInventory})(Game);