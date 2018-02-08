import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleModal, addGold} from "../actions";
import messages from '../helpers/modal_messages';
import '../assets/css/modal.css';
import '../assets/images/graphpaper.jpg';

class Modal extends Component {
    constructor(props){
        super(props);

        this.gameMessage = messages.welcome;
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

    componentWillReceiveProps(nextProps){

        if (this.props.dragonHP > 0 && this.props.playerHP > 0){
            const {dragonHP, playerHP} = nextProps;

            this.checkForWin(dragonHP);
            this.checkForLoss(playerHP);
        }
    }

    render() {

        const {modalState, toggleModal} = this.props;

        return (
            <div onClick={toggleModal} id="outer-modal" className={!modalState ? 'hidden' : ''}>
                <div id="inner-modal" className={!modalState ? 'top-hidden' : 'shown'}>
                    <div id="close">X</div>
                    <p>{this.gameMessage}</p>
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
        gp: state.game.gold
    }
}

export default connect(mapStateToProps, {toggleModal, addGold})(Modal);