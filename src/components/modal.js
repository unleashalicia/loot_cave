import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleModal, addGold, updateGameTotal, updateGameStatus, updateMessage} from "../actions";
import messages from '../helpers/modal_messages';
import '../assets/css/buttons.css';
import '../assets/css/modal.css';
import '../assets/images/graphpaper.jpg';
import '../assets/images/dragon_scales.jpg';
import logo from '../assets/images/dragon_logo.png';


class Modal extends Component {
    constructor(props){
        super(props);

        this.gameMessage = messages.welcome;
        this.handleResetClick = this.handleResetClick.bind(this);
        this.handleLosingModalClick = this.handleLosingModalClick.bind(this);
    }

    checkForWin(dragon_hp){
        const {toggleModal, modalState, addGold, gp, updateMessage} = this.props;

        if (dragon_hp < 1) {
            setTimeout(function(){
                toggleModal(modalState)
            }, 1000);

            this.gameMessage = messages.win;
            addGold(gp, 1000);
            updateMessage(this.gameMessage);
        }
    }

    checkForGameEnd(dragonHP, gp){
        const {toggleModal, modalState, updateMessage} = this.props;

        if (dragonHP < 1 && gp === 1230) {
            setTimeout(function(){
                toggleModal(modalState)
            }, 1000);
            this.gameMessage = messages.treasure;
            updateMessage(this.gameMessage);
        }
    }

    checkForLoss(player_hp){
        const {toggleModal, modalState, updateMessage} = this.props;

        if (player_hp < 1){
            setTimeout(function(){
                toggleModal(modalState)
            }, 1000);
            this.gameMessage = messages.lose;
            updateMessage(this.gameMessage);
        }
    }

    handleResetClick(){
        const {games, gameStatus, updateGameTotal, updateGameStatus, updateMessage} = this.props;

        if (this.gameMessage !== messages.welcome){
            updateGameTotal(games);
            updateGameStatus(gameStatus);
            setTimeout(function(){
                console.log("Welcome message should happen here.");
                this.gameMessage = messages.welcome;
                updateMessage(this.gameMessage);
            }, 2000);
        }
    }

    handleLosingModalClick(){
        const {toggleModal, modalState} = this.props;
        this.handleResetClick();
        toggleModal(modalState);
    }

    componentWillReceiveProps(nextProps){

        const {dragonHP, playerHP, modalState, updateMessage} = this.props;

        if (dragonHP > 0 && playerHP > 0){
            const {dragonHP, playerHP, gp} = nextProps;
            this.checkForWin(dragonHP);
            this.checkForLoss(playerHP);
            this.checkForGameEnd(dragonHP, gp);
        } else if (dragonHP === 3 && playerHP === 1) {
            setTimeout(function(){
                this.gameMessage = messages.welcome;
                updateMessage(this.gameMessage);
            }, 2000);
        }

        if (this.gameMessage === messages.lose && modalState === true && nextProps.modalState === false) {
            this.handleResetClick();
            this.gameMessage = messages.welcome;
            updateMessage(this.gameMessage);
        }
    }

    render() {
        const {modalState, toggleModal, gp} = this.props;

        return (
            <div onClick={this.gameMessage === messages.lose ? this.handleLosingModalClick : toggleModal} className={!modalState ? 'hidden outer-modal' : 'outer-modal'}>
                <div className={!modalState ? 'top-hidden inner-modal' : 'shown inner-modal'}>
                    <div className="close">X</div>
                    <h1>{this.gameMessage === messages.welcome ? "LOOT CAVE" : this.gameMessage === messages.lose ? "ALAS" : "HUZZAH!"}</h1>
                    <p>{this.gameMessage}</p>
                    <div id="modal-button-container">
                        <button className={this.gameMessage === messages.win && gp < 1230 ? "" : "hidden"}>Find More Treasure!</button>
                        <button onClick={this.handleResetClick}>{this.gameMessage === messages.welcome ? "Start Game" : "Play Again"}</button>
                    </div>
                    <img className={this.gameMessage === messages.win && gp < 1230 ? "hidden" : ""} src={logo} alt="dragon logo"/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        modalState: state.game.modal,
        dragonHP: state.game.dragonHP,
        playerHP: state.game.playerHP,
        gp: state.game.gold,
        games: state.game.games,
        gameStatus: state.game.newGame
    }
}

export default connect(mapStateToProps, {toggleModal, addGold, updateGameTotal, updateGameStatus, updateMessage})(Modal);