import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleModal, addGold, updateGameTotal, updateGameStatus} from "../actions";
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
    }

    checkForWin(dragon_hp){
        const {toggleModal, modalState, addGold, gp} = this.props;

        if (dragon_hp < 1) {
            setTimeout(function(){
                toggleModal(modalState)
            }, 1000);

            this.gameMessage = messages.win;
            addGold(gp, 1000);
        }
    }

    checkForLoss(player_hp){
        const {toggleModal, modalState} = this.props;

        if (player_hp < 1){
            setTimeout(function(){
                toggleModal(modalState)
            }, 1000);
            this.gameMessage = messages.lose;
        }
    }

    handleResetClick(){
        const {games, gameStatus, updateGameTotal, updateGameStatus} = this.props;

        if (this.gameMessage !== messages.welcome){
            updateGameTotal(games);
            updateGameStatus(gameStatus);
        }
    }

    componentWillReceiveProps(nextProps){

        const {dragonHP, playerHP, modalState, updateGameStatus, gameStatus} = this.props;

        if (dragonHP > 0 && playerHP > 0){
            const {dragonHP, playerHP} = nextProps;

            this.checkForWin(dragonHP);
            this.checkForLoss(playerHP);
        } else if (dragonHP === 3 && playerHP === 1) {
            setTimeout(function(){
                this.gameMessage = messages.welcome;
            }, 2000);

        }

        if (this.gameMessage === messages.lose && modalState === true && nextProps.modalState === false) {
            updateGameStatus(gameStatus);
        }
    }

    render() {

        const {modalState, toggleModal, gp} = this.props;

        return (
            <div onClick={toggleModal} className={!modalState ? 'hidden outer-modal' : 'outer-modal'}>
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

export default connect(mapStateToProps, {toggleModal, addGold, updateGameTotal, updateGameStatus})(Modal);