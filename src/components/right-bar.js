import React, {Component} from 'react';
import {updateGameTotal, updateGameStatus, toggleMatchKey, updateMessage} from "../actions";
import {connect} from 'react-redux';
import messages from '../helpers/modal_messages';

import '../assets/css/buttons.css';
import '../assets/css/right-bar.css';



class RightBar extends Component{
    constructor(props){
        super(props);

        this.gameMessage = messages.welcome;

        this.handleResetClick = this.handleResetClick.bind(this);
        this.handleMatchKeyClick = this.handleMatchKeyClick.bind(this);
    }

    handleResetClick(){
        const {games, gameStatus, updateGameTotal, updateGameStatus, updateMessage} = this.props;

        this.gameMessage = messages.welcome;

        updateMessage(this.gameMessage);
        updateGameTotal(games);
        updateGameStatus(gameStatus);

    }

    // handleResetClick(){
    //     const {games, gameStatus, updateGameTotal, updateGameStatus, updateMessage} = this.props;
    //
    //     if (this.gameMessage !== messages.welcome){
    //         this.gameMessage = messages.welcome;
    //         updateGameTotal(games);
    //         updateGameStatus(gameStatus);
    //         setTimeout(function(){
    //             updateMessage(this.gameMessage);
    //         }, 2000);
    //     }
    // }

    handleMatchKeyClick(){
        const {matchKey, toggleMatchKey} = this.props;

        toggleMatchKey(matchKey);
    }

    render(){

        const {attempts, matches, games} = this.props;

        return (
            <section id="right-bar" className ="right-menu">
                <div className="stats-container">
                    <div className="title-div">
                        <h3>Memory Stats</h3>
                    </div>
                    <div className="games-played stats-div">
                        <p className="label">Games: </p>
                        <div className="value">{games}</div>
                    </div>
                    <div className="attempts stats-div">
                        <p className="label">Attempts: </p>
                        <div className="value">{attempts}</div>
                    </div>
                    <div className="accuracy stats-div">
                        <p className="label">Accuracy: </p>
                        <div className="value">{ attempts ? Math.round((matches/attempts) * 100 ) : 0}%</div>
                    </div>
                    <button onClick={this.handleMatchKeyClick} className="game-button">Match Guide</button>
                    <button onClick={this.handleResetClick} className="game-button">New <br/>Game</button>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state){
    return {
        attempts: state.game.attempts,
        matches: state.game.matches,
        games: state.game.games,
        gameStatus: state.game.newGame,
        inventory: state.game.inventory,
        matchKey: state.game.matchKey,
        message: state.game.message
    }
}

export default connect(mapStateToProps, {updateGameTotal, updateGameStatus, toggleMatchKey, updateMessage})(RightBar);

