import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleModal, addGold, updateGameTotal, updateGameStatus, updateMessage} from "../actions";
import messagesObj from '../helpers/modal_messages';
import '../assets/css/buttons.css';
import '../assets/css/modal.css';
import '../assets/images/graphpaper.jpg';
import '../assets/images/dragon_scales.jpg';
import logo from '../assets/images/dragon_logo.png';


class Modal extends Component {
    constructor(props){
        super(props);

        this.handleResetClick = this.handleResetClick.bind(this);
        this.handleLosingModalClick = this.handleLosingModalClick.bind(this);
    }

    componentDidMount(){
        this.props.updateMessage("welcome");
    }

    checkForWin(dragon_hp){
        const {toggleModal, modalState, addGold, gp, updateMessage, message} = this.props;

        if (message === messagesObj.win && gp < 1230) {
            return;
        }

        if (dragon_hp < 1) {
            setTimeout(function(){
                toggleModal(modalState)
            }, 1000);

            addGold(gp, 1000);
            updateMessage("win");
        }
    }

    checkForGameEnd(dragonHP, gp){
        console.log("made it to function");
        const {toggleModal, modalState, updateMessage} = this.props;

        if (dragonHP < 1 && gp === 1230) {
            setTimeout(function(){
                toggleModal(modalState)
            }, 1000);

            updateMessage("treasure");
        }
    }

    checkForLoss(player_hp){
        const {toggleModal, modalState, updateMessage} = this.props;

        if (player_hp < 1){
            setTimeout(function(){
                toggleModal(modalState)
            }, 1000);

            updateMessage("lose");
        }
    }

    handleResetClick(){
        const {games, gameStatus, updateGameTotal, updateGameStatus, updateMessage, message} = this.props;

        if (message !== messagesObj.welcome){

            updateGameTotal(games);
            updateGameStatus(gameStatus);
            setTimeout(function(){
                updateMessage("welcome");
            }, 2000);
        }
    }

    handleLosingModalClick(){
        const {toggleModal, modalState, updateMessage} = this.props;
        this.handleResetClick();
        toggleModal(modalState);
        setTimeout(function(){
            updateMessage("welcome")
        }, 2000);

    }

    componentWillReceiveProps(nextProps){

        const {dragonHP, playerHP, modalState, updateMessage, message, gp} = this.props;
        const nextDragonHP = nextProps.dragonHP;
        const nextPlayerHP = nextProps.playerHP;
        const nextGP = nextProps.gp;

        if (dragonHP > 0 && playerHP > 0){

            this.checkForWin(nextDragonHP);
            this.checkForLoss(nextPlayerHP);

        } else if (dragonHP === 3 && playerHP === 1) {
            setTimeout(function(){

                updateMessage("welcome");
            }, 2000);
        }

        if ((gp < 1230 && nextGP === 1230) && dragonHP < 1) {
            this.checkForGameEnd(nextDragonHP, nextGP);
        }

        if (message === messagesObj.lose && modalState === true && nextProps.modalState === false) {
            this.handleResetClick();

            updateMessage("welcome");
        }
    }

    render() {
        const {modalState, toggleModal, gp, message} = this.props;

        return (
            <div onClick={message === messagesObj.lose ? this.handleLosingModalClick : toggleModal} className={!modalState ? 'hidden outer-modal' : 'outer-modal'}>
                <div className={!modalState ? 'top-hidden inner-modal' : 'shown inner-modal'}>
                    <div className="close">X</div>
                    <h1>{message === messagesObj.welcome ? "LOOT CAVE" : message === messagesObj.lose ? "ALAS" : "HUZZAH!"}</h1>
                    <p>{message}</p>
                    <div id="modal-button-container">
                        <button className={message === messagesObj.win && gp < 1230 ? "" : "hidden"}>Find More Treasure!</button>
                        <button onClick={this.handleResetClick}>{message === messagesObj.welcome ? "Start Game" : "Play Again"}</button>
                    </div>
                    <img className={message === messagesObj.win && gp < 1230 ? "hidden" : ""} src={logo} alt="dragon logo"/>
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
        gameStatus: state.game.newGame,
        message: state.game.message
    }
}

export default connect(mapStateToProps, {toggleModal, addGold, updateGameTotal, updateGameStatus, updateMessage})(Modal);