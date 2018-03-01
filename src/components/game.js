import '../assets/css/game.css';

import React, {Component} from 'react';
import cardData from '../helpers/card_data';
import Card from './card';
import {doubleDeck, shuffleArray, setFirstIndex, flipCard, addGold, findArmor, findWeapon, fillInventory, stabDragon, takeDamage, fadeMatch, addAttempt, addMatch, updateGameStatus, toggleModal} from "../actions/index";
import {connect} from 'react-redux';

class Game extends Component{
    constructor(props){
        super(props);

        this.blockClick = true;
    }

    componentDidMount(){

        const {toggleModal, modalState} = this.props;

        this.createNewDeck();
        setTimeout(
            function(){
            toggleModal(modalState);
            }, 5000
        );
    }

    componentWillReceiveProps(NextProps){

        const {newGame, modalState} = this.props;

        if(NextProps.newGame){
            this.createNewDeck();
            this.props.updateGameStatus(newGame);
            this.blockClick = true;
        }

        if (NextProps.modalState === false && modalState === true) {
            this.blockClick = false;
        }
    }

    createNewDeck(){
        const {shuffleArray, doubleDeck} = this.props;

        shuffleArray(doubleDeck(cardData).payload);
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
            matches,
            flipCard,
            addGold,
            findArmor,
            findWeapon,
            fillInventory,
            stabDragon,
            takeDamage,
            fadeMatch,
            addAttempt,
            addMatch
            } = this.props;

        if (this.blockClick || playDeck[cardIndex].flipped) return;

        if (index === null) {
            setFirstIndex(cardIndex);
            flipCard(playDeck, cardIndex);
        } else {
            this.blockClick = true;
            addAttempt(attempts);
            flipCard(playDeck, cardIndex);
            if (playDeck[cardIndex].image === playDeck[index].image) {
                fadeMatch(playDeck, index, cardIndex);
                addMatch(matches);

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
        console.log(this.blockClick);

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
        attempts: state.game.attempts,
        matches: state.game.matches,
        newGame: state.game.newGame,
        modalState: state.game.modal
    }
}

export default connect(mapStateToProps, {doubleDeck, shuffleArray, setFirstIndex, flipCard, addGold, findArmor, findWeapon, fillInventory, stabDragon, takeDamage, fadeMatch, addAttempt, addMatch, updateGameStatus, toggleModal})(Game);