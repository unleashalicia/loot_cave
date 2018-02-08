import '../assets/css/game.css';

import React, {Component} from 'react';
import cardData from '../helpers/card_data';
import Card from './card';
import {doubleDeck, shuffleArray, setFirstIndex, flipCard, addGold, findArmor, findWeapon, fillInventory, stabDragon, takeDamage, fadeMatch, addAttempt} from "../actions/index";
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
            dragonHP,
            gp,
            armoury,
            weapon,
            setFirstIndex,
            attempts,
            flipCard,
            addGold,
            findArmor,
            findWeapon,
            fillInventory,
            stabDragon,
            takeDamage,
            fadeMatch,
            addAttempt
            } = this.props;

        if (this.blockClick) return;

        if (index === null) {
            setFirstIndex(cardIndex);
            flipCard(playDeck, cardIndex);
        } else {
            this.blockClick = true;
            addAttempt(attempts);
            flipCard(playDeck, cardIndex);
            if (playDeck[cardIndex].image === playDeck[index].image) {
                fadeMatch(playDeck, index, cardIndex);

                switch (playDeck[index].type){
                    case "weapon":
                        findWeapon();
                        fillInventory(armoury, "sword");
                    case "treasure":
                        addGold(gp, playDeck[index].worth);
                        break;
                    case "armor":
                        addGold(gp, playDeck[index].worth);
                        findArmor(hp);
                        fillInventory(armoury, "chainmail");
                        break;
                    case "dragon":
                        stabDragon(dragonHP, weapon);
                }

                this.blockClick = false;
            } else {
                if (playDeck[index].type === "dragon" && playDeck[cardIndex].type === "dragon"){
                    takeDamage(hp);
                }
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
            return <Card flip={()=>{this.handleCardClick(index)}} frontImage={item.image} altImage={item.alt} cardType={item.type} isFlipped={item.flipped} isMatched={item.matched} key={index}/>
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
        gp: state.game.gold,
        hp: state.game.playerHP,
        armoury: state.game.inventory,
        weapon: state.game.weapon,
        dragonHP: state.game.dragonHP,
        attempts: state.game.attempts
    }
}

export default connect(mapStateToProps, {doubleDeck, shuffleArray, setFirstIndex, flipCard, addGold, findArmor, findWeapon, fillInventory, stabDragon, takeDamage, fadeMatch, addAttempt})(Game);