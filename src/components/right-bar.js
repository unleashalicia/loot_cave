import React, {Component} from 'react';
import {updateGameTotal, updateGameStatus} from "../actions";
import {connect} from 'react-redux';

import '../assets/css/right-bar.css';
import d20 from '../assets/images/d20.png';

class RightBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            roll: false,
            rollNum: Math.floor(Math.random()*20) + 1
        };

        this.handleResetClick = this.handleResetClick.bind(this);
        this.rollNum = this.rollNum.bind(this);
        this.rollDie = this.rollDie.bind(this);
        this.handleDieClick = this.handleDieClick.bind(this);
    }

    handleResetClick(){
        const {games, gameStatus, updateGameTotal, updateGameStatus} = this.props;

        updateGameTotal(games);
        updateGameStatus(gameStatus);
    }

    handleDieClick(){
        this.rollNum();
        this.rollDie();
    }

    rollDie(){
        this.setState({
            roll: true
        });
    }

    rollNum(){
        let num = Math.floor(Math.random()*20) + 1;

        this.setState({
            rollNum: num
        })
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
                    <button onClick={this.handleResetClick} className="reset">New Game</button>
                    <div id="music-container">
                        <i className="fa fa-music" aria-hidden="true"></i>
                        <button className="audio"><i className="fa fa-play"></i></button>
                    </div>
                    <div id="die">
                        <img onClick={this.handleDieClick} src={d20} alt="20-sided die" className={this.state.roll ? 'roll-die' : ''}/>
                        <div>{this.state.rollNum}</div>
                    </div>
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
        inventory: state.game.inventory
    }
}

export default connect(mapStateToProps, {updateGameTotal, updateGameStatus})(RightBar);

